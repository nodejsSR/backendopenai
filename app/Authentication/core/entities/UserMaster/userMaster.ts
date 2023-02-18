import { UserMasterEmail } from "./userMasterEmail";
import { UserMasterFullname } from "./userMasterFullname";
import { UserMasterId } from "./userMasterId";
import { UserMasterPassword } from "./userMasterPassword";


export class UserMaster {

    readonly id:UserMasterId 
    readonly fullname:UserMasterFullname 
    readonly email:UserMasterFullname 
    readonly password:UserMasterFullname 

    constructor(id:UserMasterId,fullname:UserMasterFullname,email:UserMasterEmail,password:UserMasterPassword){
        this.id=id
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    static create({id,fullname,email,password}:{id:string,fullname:string,email:string,password:string}){
        return new UserMaster(
            new UserMasterId(id),
            new UserMasterFullname(fullname),
            new UserMasterEmail(email),
            new UserMasterPassword(password)
        )
    }
}