import { UserOfClientAuth } from "../entities/UserOfClientAuth/UserOfClientAuth";
import { ClientAuthPassword } from "../entities/ClientAuth/ClientAuthPassword";

export interface recordUserMaster{
    id:string,
   fullname:string,
   email:string,
   dns:string,
}

export interface UserMasterRepository{
     authenticarClient(clientAuth:UserOfClientAuth,dns:string):Promise<recordUserMaster>
     changePassword(id:string,dns:string,password:ClientAuthPassword):Promise<recordUserMaster>
}