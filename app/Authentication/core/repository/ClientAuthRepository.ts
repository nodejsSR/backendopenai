import { ClientAuth } from "../entities/ClientAuth/ClientAuth";
import { ClientAuthPassword } from "../entities/ClientAuth/ClientAuthPassword";

export interface recordUserMaster{
    id:string,
   fullname:string,
   email:string,
   dns:string,
}

export interface ClientAuthRepository{
     authenticarClient(clientAuth:ClientAuth,dns:string):Promise<recordUserMaster | null>
     changePassword(id:string,dns:string,password:ClientAuthPassword):Promise<recordUserMaster | null>
}