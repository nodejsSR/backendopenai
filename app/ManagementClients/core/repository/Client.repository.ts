import { Client } from "../entities/Client/Client"
import { ClientDns } from "../entities/Client/ClientDns"
import { ClientId } from "../entities/Client/ClientId"

export interface record {id:string,
    fullname:string,
    identification:string,
    enterprise:string,
    email:string,
    dns:string,
    database:string,
    active:boolean}

export interface ClientRepository{
          registerCliente( client:Client):Promise<record>
          removeClientById(clienId:ClientId):Promise<record>
          searchAllClient():Promise<record[]>
          searchAndUpdateClientById(client:Client):Promise<record>
          searchClientByDomain(clientDns:ClientDns):Promise<record | null>
}