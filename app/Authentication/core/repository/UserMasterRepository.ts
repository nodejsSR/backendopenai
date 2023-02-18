import { UserMaster } from "../entities/UserMaster/userMaster";
import { UserMasterEmail } from "../entities/UserMaster/userMasterEmail";
import { UserMasterFullname } from "../entities/UserMaster/userMasterFullname";
import { UserMasterId } from "../entities/UserMaster/userMasterId";
import { UserMasterPassword } from "../entities/UserMaster/userMasterPassword";

export interface recordUserMaster{
    id:string,
   fullname:string,
   email:string
}

export interface UserMasterRepository{
     createUserMaster(userMaster:UserMaster):Promise<recordUserMaster>
     updateUserMaster(
        id:UserMasterId,
        fullname:UserMasterFullname,
        email:UserMasterEmail,
        password:UserMasterPassword
        ):Promise<recordUserMaster>
     authUserMaster(email:UserMasterEmail,password:UserMasterPassword):Promise<recordUserMaster | null>
     changePassword(id:string,password:string):Promise<any>
     veirfyIfExistsRegister():Promise<number>
}