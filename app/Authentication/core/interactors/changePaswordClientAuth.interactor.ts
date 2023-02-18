import { ClientAuthPassword } from "../entities/ClientAuth/ClientAuthPassword";
import { ClientAuthRepository } from "../repository/ClientAuthRepository";

export const changePasswordClientAuthInteractor = ( repository:ClientAuthRepository ) => 
async (
    id:string,
    dns:string,
    password:string
) => {
     const response=  await repository.changePassword(id,dns, new ClientAuthPassword(password))
     return response
}