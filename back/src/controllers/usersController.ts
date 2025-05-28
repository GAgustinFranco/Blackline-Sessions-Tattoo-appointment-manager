import { Request, Response } from "express"
import { createUserService, getUserByIdService, getUserService } from "../services/usersService";
import { validateCredentialServise } from "../services/credentialsServices";
import User from "../entities/User";

export const getUsersController = async (req:Request, res:Response) => {
    try{
        const users: User[] = await getUserService();
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
        const users: User = await getUserByIdService(Number(id));
        res.status(200).json({
            success: true,
            data: users
        })
    }   catch (error:any) {
        res.status(404).json({
            success:false,
            message: error.message
        })
    }
    }

export const registerUsersController = async (req:Request, res:Response) => {
    try{
        const {name, email, birthdate, nDni, username, password} = req.body;
        const users: User = await createUserService({name, email, birthdate, nDni, username, password});
        res.status(201).json({
            success: true,
            data: users
        })
    }   catch (error:any) {
        res.status(400).json({
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
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
    }
