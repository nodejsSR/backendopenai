import { ClientId } from "../entities/Client/ClientId";
import { ClientRepository } from "../repository/Client.repository";


export const removeClientByIdInteractor = (repository:ClientRepository) => 
async (id:string) => {
    return await repository.removeClientById( new ClientId(id))
}