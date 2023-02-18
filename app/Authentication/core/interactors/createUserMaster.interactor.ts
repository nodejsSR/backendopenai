import { UserMaster } from "../entities/UserMaster/userMaster";
import { UserMasterRepository } from "../repository/UserMasterRepository";

export const createUserMaster = (repository:UserMasterRepository) => 
async (
    id:string,
    fullname:string,
    email:string,
    password:string
) =>{
 
    const usermaster =  UserMaster.create({id,fullname,email,password})
      return await repository.createUserMaster(usermaster)
}