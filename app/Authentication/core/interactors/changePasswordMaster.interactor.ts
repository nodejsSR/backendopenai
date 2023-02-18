import { ClientAuthPassword } from "../entities/ClientAuth/ClientAuthPassword";
import { UserMasterRepository } from "../repository/UserMasterRepository";

export const changePasswordMasterInteractor = ( repository:UserMasterRepository ) => 
async (
    id:string,
    password:string
) => {
     const response=  await repository.changePassword(id,password)
     return response
}