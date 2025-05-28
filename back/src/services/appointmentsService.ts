import { appointmentRepository } from "../config/data-source";
import ICreateAppointmentDTO from "../dtos/ICreateAppointmentDTO";
import Appointment from "../entities/Appointment";
import User from "../entities/User";
import { getUserByIdService } from "./usersService";

export const getAppointmentsService = async (): Promise<Appointment[]> => {
    return await appointmentRepository.find();
}

export const getAppointmentByIdService = async (id: number): Promise<Appointment> => {
    const foundAppointment: Appointment | null = await appointmentRepository.findOne({
        where: {id}
    });
    if(!foundAppointment) throw new Error("Appointment not found");
    return foundAppointment;
}

export const createAppointmentService = async (
    createAppointmentDTO: ICreateAppointmentDTO): Promise<Appointment> => {
    const user: User = await getUserByIdService(createAppointmentDTO.userId)

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
    const foundAppointment: Appointment = await getAppointmentByIdService(id);

    if(foundAppointment.status == "cancelled")
        throw new Error ("The appointment is cancelled")

    foundAppointment.status = "cancelled";
    const results:Appointment = await  appointmentRepository.save(foundAppointment);
    
    return results.id;
}
