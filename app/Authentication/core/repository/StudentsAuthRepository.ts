import { UserOfClientAuth } from "../entities/UserOfClientAuth/UserOfClientAuth";
import { ClientAuthPassword } from "../entities/ClientAuth/ClientAuthPassword";

export interface recordUserMaster{
    id:string,
   fullname:string,
   email:string,
   dns:string,
}

export interface StudentsAuthRepository{
     authenticarClient(clientAuth:UserOfClientAuth,dns:string):Promise<any>
     changePassword(id:string,dns:string,password:string):Promise<any>
}