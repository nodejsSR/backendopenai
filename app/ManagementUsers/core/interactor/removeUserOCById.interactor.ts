import { UserOfClientId } from "../entities/UserOfClient/UserOfClientId";
import { UserOCRepository } from "../repository/UserOC.repository";


export const removeUserOCByIdInteractor = (repository:UserOCRepository) => 
async (id:string,dns:string) => {
    return await repository.removeClientById( new UserOfClientId(id),dns)
}