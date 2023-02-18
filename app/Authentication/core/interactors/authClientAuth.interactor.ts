import { ClientAuth } from "../entities/ClientAuth/ClientAuth";
import { ClientAuthRepository } from "../repository/ClientAuthRepository";

export const authClientAuthInteractor = ( repository:ClientAuthRepository ) => (
    email:string,
    password:string,
    dns:string
) => {

     const clientauth = ClientAuth.create({email,password})
     return repository.authenticarClient(clientauth,dns)
}