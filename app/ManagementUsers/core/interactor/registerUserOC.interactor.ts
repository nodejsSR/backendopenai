import { UserOfClient } from "../entities/UserOfClient/UserOfClient";
import { UserOCRepository } from "../repository/UserOC.repository";


export const registerUserOCInteractor = (repository:UserOCRepository) => 
async (params:{
    id:string,
    fullname:string,
    identification:string,
    password:string,
    email:string,
    active:boolean,
 },value_backend_subdomain:string) =>{

   const client = UserOfClient.create(params)

   return await repository.registerCliente(client,value_backend_subdomain)

}


