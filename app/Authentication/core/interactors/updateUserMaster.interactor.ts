
import { UserMasterEmail } from "../entities/UserMaster/userMasterEmail";
import { UserMasterFullname } from "../entities/UserMaster/userMasterFullname";
import { UserMasterId } from "../entities/UserMaster/userMasterId";
import { UserMasterPassword } from "../entities/UserMaster/userMasterPassword";
import { UserMasterRepository } from "../repository/UserMasterRepository";

export const updateUserMaster = (repository:UserMasterRepository) => 
async (
    id:string,
    fullname:string,
    email:string,
    password:string
) =>{
 

      return await repository.updateUserMaster( 
        new UserMasterId(id),
        new UserMasterFullname(fullname),
        new UserMasterEmail(email),
        new UserMasterPassword(password)
        )
}