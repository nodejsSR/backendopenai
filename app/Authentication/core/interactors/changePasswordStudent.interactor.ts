
import { StudentsAuthRepository } from "../repository/StudentsAuthRepository";


export const changePasswordInteractor =  ( repository:StudentsAuthRepository ) => 
async ( {
    userid,
    dns,
    password
}:{ 
    userid:string,
    dns:string,
    password:string
 } ) => {

      
   return  await repository.changePassword(userid,dns,  password)

}