import { credentialRepository, userRepository } from "../config/data-source";
import ICreateUserDTO from "../dtos/ICreateUserDTO";
import User from "../entities/User";
import { createCredentialService } from "./credentialsServices";

export const getUserService = async (): Promise<User[]> => {
    return await userRepository.find();
}

export const getUserByIdService = async (id: number): Promise<User> => {
    const foundUser: User | null = await userRepository.findOne({
        where: {id}    
    })
    if(!foundUser) throw new Error("User not found");
    return foundUser;
}

export const createUserService = async (createUserDTO: ICreateUserDTO): Promise<User> => {
    const newUser: User = await userRepository.create({
        name: createUserDTO.name,
        email: createUserDTO.email,
        birthdate: createUserDTO.birthdate,
        nDni: createUserDTO.nDni,
    });

    const newCredential = await createCredentialService(
        createUserDTO.username, 
        createUserDTO.password
    );

    newUser.credentials = newCredential
    const results:User=await userRepository.save(newUser)
    return results;
}