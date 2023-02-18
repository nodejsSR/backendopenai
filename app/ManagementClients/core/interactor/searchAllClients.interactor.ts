import { ClientRepository } from "../repository/Client.repository";


export const searchAllClientsInteractor = (repository:ClientRepository) => 
async () => {

    return await repository.searchAllClient()

}