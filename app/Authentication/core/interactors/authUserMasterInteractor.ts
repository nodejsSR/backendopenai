import { UserMasterEmail } from "../entities/UserMaster/userMasterEmail";
import { UserMasterPassword } from "../entities/UserMaster/userMasterPassword";
import { UserMasterRepository } from "../repository/UserMasterRepository";



export const authUserMasterInteractor = (repository:UserMasterRepository) =>
async (userMasterEmail:string,userMasterPassword:string)=>{

    return await repository.authUserMaster(new UserMasterEmail(userMasterEmail), new UserMasterPassword(userMasterPassword))
}