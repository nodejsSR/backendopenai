import { Client } from "../entities/Client/Client";
import { ClientRepository } from "../repository/Client.repository";


export const registerClienteInteractor = (repository:ClientRepository) => 
async (params:{
    id:string,
    fullname:string,
    identification:string,
    password:string,
    enterprise:string
    email:string,
    dns:string,
    database:string,
    active:boolean
 }) =>{

   const client = Client.create(params)

   return await repository.registerCliente(client)

}