import ICredential from "../interfaces/ICredential";

const credentialsDB: ICredential[] = [];
let credentialsId: number = 1;

export const createCredentialService = async (username:string, password:string): Promise<ICredential["id"]> =>{
    const newCredentials: ICredential = {
        id:credentialsId++,
        username,
        password,
    }
    credentialsDB.push(newCredentials);
    credentialsId++;
    return newCredentials.id;
}

export const validateCredentialServise = async (username: string, password: string): Promise <ICredential["id"]> =>{
    const foundCredential: ICredential |undefined = credentialsDB.find((credential) => credential.username == username)

    if(!foundCredential){
        throw new Error("No existe el username")
    }
    if(foundCredential.password != password){
        throw new Error("Contraseña incorrecta");
    }

    return foundCredential.id;
};
