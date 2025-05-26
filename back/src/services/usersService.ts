import ICreateUserDTO from "../dtos/ICreateUserDTO";
import IUser from "../interfaces/IUser";
import { createCredentialService } from "./credentialsServices";

const usersDB:IUser[] = [];
let usersId:number = 1

export const getUserService = async (): Promise<IUser[]> => {
    return usersDB
}

export const getUserByIdService = async (id: number): Promise<IUser> => {
    const foundUser: IUser | undefined = usersDB.find((user) => user.id == id)
    if(!foundUser) throw new Error("User not found");
    return foundUser;
}

export const createUserService = async (createUserDTO: ICreateUserDTO): Promise<IUser> => {
    const newCredentialId = await createCredentialService(
        createUserDTO.username, 
        createUserDTO.password)
    
    const newUser: IUser = {
        id: usersId++,
        name: createUserDTO.name,
        email: createUserDTO.email,
        birthdate: createUserDTO.birthdate,
        nDni: createUserDTO.nDni,
        credentialsId: newCredentialId
    }

    usersDB.push(newUser)
    return newUser;
}