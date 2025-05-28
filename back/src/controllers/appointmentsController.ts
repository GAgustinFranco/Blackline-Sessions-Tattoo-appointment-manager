import { Request, Response } from "express";
import { cancelAppointmentsService, createAppointmentService, getAppointmentByIdService, getAppointmentsService } from "../services/appointmentsService";
import ICreateAppointmentDTO from "../dtos/ICreateAppointmentDTO";
import Appointment from "../entities/Appointment";

export const getAppointmentsController = async (req:Request, res:Response) => {
    try{
    const appointments: Appointment[] = await getAppointmentsService();
    res.status(200).json({
        success: true,
        data: appointments
    })
}   catch (error:any) {
    res.status(404).json({
        success:false,
        message: error.message
    })
}
}

export const getAppointmentByIdController = async (req:Request, res:Response) => {
    try{
        const {id} =req.params;
        const appointments: Appointment = await getAppointmentByIdService(Number(id));
        res.status(200).json({
            success: true,
            data: appointments
        })
    }   catch (error:any) {
        res.status(404).json({
            success:false,
            message: error.message
        })
    }
    }

export const createAppointmentsController = async (req:Request, res:Response) => {
    try{
        const {date, time, userId, status}:ICreateAppointmentDTO =req.body;
        const appointments: Appointment = await createAppointmentService({date, time, userId, status});
        res.status(201).json({
            success: true,
            data: appointments
        })
    }   catch (error:any) {
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
    }

export const cancelAppointmentsController = async (req:Request, res:Response) => {
    try{
        const {id} =req.params;
        const appointmentsId: number = await cancelAppointmentsService(Number(id));
        res.status(200).json({
            success: true,
            data: appointmentsId
        })
    }   catch (error:any) {
        res.status(404).json({
            success:false,
            message: error.message
        })
    }
    }
