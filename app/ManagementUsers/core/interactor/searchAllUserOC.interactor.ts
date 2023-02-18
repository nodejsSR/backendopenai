import { UserOCRepository } from "../repository/UserOC.repository";


export const searchAllUserOCInteractor = (repository:UserOCRepository) => 
async (dns:string) => {

    return await repository.searchAllClient(dns)

}