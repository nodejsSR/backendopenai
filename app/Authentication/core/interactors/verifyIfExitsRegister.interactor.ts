import { UserMasterEmail } from "../entities/UserMaster/userMasterEmail";
import { UserMasterFullname } from "../entities/UserMaster/userMasterFullname";
import { UserMasterId } from "../entities/UserMaster/userMasterId";
import { UserMasterPassword } from "../entities/UserMaster/userMasterPassword";
import { UserMasterRepository } from "../repository/UserMasterRepository";

export const veirfyIfExistsRegisterInteractor = (repository:UserMasterRepository) => 
async () =>{
 

      return  await repository.veirfyIfExistsRegister()
    }