import { Request, Response } from "express";
import IAppointment from "../interfaces/IAppoitment";
import { cancelAppointmentsService, createAppointmentService, getAppointmentByIdService, getAppointmentsService } from "../services/appointmentsService";
import ICreateAppointmentDTO from "../dtos/ICreateAppointmentDTO";

export const getAppointmentsController = async (req:Request, res:Response) => {
    try{
    const appointments: IAppointment[] = await getAppointmentsService();
    res.status(200).json({
        success: true,
        data: appointments
    })
}   catch (error:any) {
    res.status(500).json({
        success:false,
        message: error.message
    })
}
}

export const getAppointmentByIdController = async (req:Request, res:Response) => {
    try{
        const {id} =req.params;
        const appointments: IAppointment = await getAppointmentByIdService(Number(id));
        res.status(200).json({
            success: true,
            data: appointments
        })
    }   catch (error:any) {
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
    }

export const createAppointmentsController = async (req:Request, res:Response) => {
    try{
        const {date, time, userId, status}:ICreateAppointmentDTO =req.body;
        const appointments: IAppointment = await createAppointmentService({date, time, userId, status});
        res.status(201).json({
            success: true,
            data: appointments
        })
    }   catch (error:any) {
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
    }

export const cancelAppointmentsController = async (req:Request, res:Response) => {
    try{
        const {id} =req.params;
        const appointmentsId: number = await cancelAppointmentsService(Number(id));
        res.status(201).json({
            success: true,
            data: appointmentsId
        })
    }   catch (error:any) {
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
    }
