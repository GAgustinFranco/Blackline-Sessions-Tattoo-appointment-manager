import { appointmentRepository } from "../config/data-source";
import ICreateAppointmentDTO from "../dtos/ICreateAppointmentDTO";
import Appointment from "../entities/Appointment";
import User from "../entities/User";
import { getUserByIdService } from "./usersService";

export const getAppointmentsService = async (): Promise<Appointment[]> => {
    return await appointmentRepository.find();
}

export const getAppointmentByIdService = async (id: number): Promise<Appointment> => {
    console.log("🔎 Buscando appointment en base de datos con ID:", id);
    const foundAppointment: Appointment | null = await appointmentRepository.findOne({
        where: {id}
    });
    if(!foundAppointment) throw new Error("Appointment not found");

    return foundAppointment;
}

export const createAppointmentService = async (
    createAppointmentDTO: ICreateAppointmentDTO): Promise<Appointment> => {
    const user: User = await getUserByIdService(createAppointmentDTO.userId);

    const appointmentDateTime = new Date(`${createAppointmentDTO.date}T${createAppointmentDTO.time}`);

    const day = appointmentDateTime.getDay();
    const hour = appointmentDateTime.getHours();

    const validDays = [4,5,6];
    const isValidDay = validDays.includes(day);
    const isValidHour = hour >= 19 || hour === 23;

    if (!isValidDay || !isValidHour) {
        throw new Error ("Appointments can only be scheduled on Thursday, Friday, or Saturday between 19:00 and 23:00.")
    }

    const newAppointment: Appointment = await appointmentRepository.create ({
        date: createAppointmentDTO.date,
        time: createAppointmentDTO.time,
        user: user,
        status: createAppointmentDTO.status
    })

    const results: Appointment = await appointmentRepository.save(newAppointment)
    return results;
}

export const cancelAppointmentsService = async (id: number): Promise<number>=>{
    console.log("🔍 Buscando turno con ID:", id);
    const foundAppointment: Appointment = await getAppointmentByIdService(id);

    if(foundAppointment.status == "cancelled")
    
        throw new Error ("The appointment is cancelled")

    foundAppointment.status = "cancelled";
    const results:Appointment = await  appointmentRepository.save(foundAppointment);
    
    return results.id;
}
