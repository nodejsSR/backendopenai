import { UserOfClient } from "../entities/UserOfClient/UserOfClient"
import { UserOfClientId } from "../entities/UserOfClient/UserOfClientId"

export interface record {
    id:string,
    fullname:string,
    identification:string,
    email:string,
    active:boolean
}

export interface UserOCRepository{
          registerCliente( user:UserOfClient,dns:string):Promise<record>
          removeClientById(clienId:UserOfClientId,dns:string):Promise<record>
          searchAllClient(dns:string):Promise<record[]>
          searchAndUpdateClientById(client:UserOfClient,dns:string):Promise<record>
  //        searchClientByDomain(clientDns:ClientDns):Promise<record | null>
}