import { ClientDns } from "../entities/Client/ClientDns";
import { ClientRepository } from "../repository/Client.repository";


export const searchClientByDomain = (repository:ClientRepository) => 
async (domain:string) => {
        
    return  await repository.searchClientByDomain( new ClientDns(domain))
     
}