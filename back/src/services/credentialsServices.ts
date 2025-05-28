import Credential from "../entities/Credential";
import { AppDataSource, credentialRepository } from "../config/data-source";

export const createCredentialService = async (username:string, password:string): Promise<Credential> =>{
    const newCredentials = await credentialRepository.create({
        username,
        password,
    })

    const results: Credential = await credentialRepository.save(newCredentials);
    return results;
}

export const validateCredentialServise = async (username: string, password: string): Promise <Credential["id"]> =>{
    const foundCredential: Credential | null = await credentialRepository.findOneBy({username})

    if(!foundCredential){
        throw new Error("No existe el username")
    }
    if(foundCredential.password != password){
        throw new Error("Contraseña incorrecta");
    }

    return foundCredential.id;
};
