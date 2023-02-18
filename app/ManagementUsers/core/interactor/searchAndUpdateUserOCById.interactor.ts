import { UserOfClient } from "../entities/UserOfClient/UserOfClient";
import { UserOCRepository } from "../repository/UserOC.repository";


export const searchAndUpdateUserOCByIdInteractor = (repository:UserOCRepository) => 
async (params:{
    id:string,
    fullname:string,
    identification:string,
    email:string,
    active:boolean
 },dns:string) => {

    const client= UserOfClient.create({
        id:params.id,
        fullname:params.fullname,
        identification:params.identification,
        password:"no se guardara",
        email:params.email,
        active:params.active
    })

    return await repository.searchAndUpdateClientById(client,dns)

}