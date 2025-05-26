import { Request, Response } from "express"
import IUser from "../interfaces/IUser";
import { createUserService, getUserByIdService, getUserService } from "../services/usersService";
import { validateCredentialServise } from "../services/credentialsServices";

export const getUsersController = async (req:Request, res:Response) => {
    try{
        const users: IUser[] = await getUserService();
        res.status(200).json({
            success: true,
            data: users
        })
    }   catch (error:any) {
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
    }

export const getUserByIdController = async (req:Request, res:Response) => {
    try{
        const {id} = req.params;
        const users: IUser = await getUserByIdService(Number(id));
        res.status(200).json({
            success: true,
            data: users
        })
    }   catch (error:any) {
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
    }

export const registerUsersController = async (req:Request, res:Response) => {
    try{
        const {name, email, birthdate, nDni, username, password} = req.body;
        const users: IUser = await createUserService({name, email, birthdate, nDni, username, password});
        res.status(201).json({
            success: true,
            data: users
        })
    }   catch (error:any) {
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
    }

export const loginUsersController = async (req:Request, res:Response) => {
    try{
        const {username, password} = req.body;
        const credentialId: number = await validateCredentialServise(username, password);
        res.status(200).json({
            success: true,
            data: credentialId
        })
    }   catch (error:any) {
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
    }
