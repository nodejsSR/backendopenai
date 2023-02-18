import { UserOfClientAuthEmail } from "./UserOfClientAuthEmail";
import { UserOfClientAuthPassword } from "./UserOfClientAuthPassword";


export class UserOfClientAuth{

  
    readonly email:UserOfClientAuthEmail
    readonly password:UserOfClientAuthPassword
    
   private constructor( 
       email:UserOfClientAuthEmail,
        password:UserOfClientAuthPassword,
        ){
            this.password = password
            this.email = email
        }


    static create(
       params:{ 
        email:string,
        password:string}
       
    ){

        return new UserOfClientAuth( 
            new UserOfClientAuthEmail(params.email),
            new UserOfClientAuthPassword(params.password)
            )
    }
}