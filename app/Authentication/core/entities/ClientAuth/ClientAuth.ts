import { ClientAuthEmail } from "./ClientAuthEmail";
import { ClientAuthPassword } from "./ClientAuthPassword";


export class ClientAuth{

  
    readonly email:ClientAuthEmail
    readonly password:ClientAuthPassword
    
   private constructor( 
       email:ClientAuthEmail,
        password:ClientAuthPassword,
        ){
            this.password = password
            this.email = email
        }


    static create(
       params:{ 
        email:string,
        password:string}
       
    ){

        return new ClientAuth( 
            new ClientAuthEmail(params.email),
            new ClientAuthPassword(params.password)
            )
    }
}