import { UserOfClientAuth } from "../entities/UserOfClientAuth/UserOfClientAuth";
import { StudentsAuthRepository } from "../repository/StudentsAuthRepository";

export const authStudentsInteractor = ( repository:StudentsAuthRepository ) => (
    email:string,
    password:string,
    dns:string
) => {

     const studenttauth = UserOfClientAuth.create({email,password})
     return repository.authenticarClient(studenttauth,dns)
}