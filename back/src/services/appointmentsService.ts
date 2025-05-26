import ICreateAppointmentDTO from "../dtos/ICreateAppointmentDTO";
import IAppointment from "../interfaces/IAppoitment";

const appointmentsDB: IAppointment[] = [];
let appointmentsId: number = 1;

export const getAppointmentsService = async (): Promise<IAppointment[]> => {
    return appointmentsDB;
}

export const getAppointmentByIdService = async (id: number): Promise<IAppointment> => {
    const foundAppointment: IAppointment | undefined = appointmentsDB.find(
        (appointment) => appointment.id == id
    );
    if(!foundAppointment) throw new Error("Appointment not found");
    return foundAppointment;
}

export const createAppointmentService = async (
    createAppointmentDTO: ICreateAppointmentDTO): Promise<IAppointment> => {
  
    const newAppointment: IAppointment = {
        id: appointmentsId++,
        date: createAppointmentDTO.date,
        time: createAppointmentDTO.time,
        userId: createAppointmentDTO.userId,
        status: createAppointmentDTO.status
    }

    appointmentsDB.push(newAppointment)
    return newAppointment;
}

export const cancelAppointmentsService = async (id: number): Promise<number>=>{
    const foundAppointment: IAppointment = await getAppointmentByIdService(id);

    if(foundAppointment.status == "cancelled")
        throw new Error ("The appointment is cancelled")

    foundAppointment.status = "cancelled";
    return foundAppointment.id;
}
