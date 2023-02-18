import { UserOfClientActive } from "./UserOfClientActive";
import { UserOfClientEmail } from "./UserOfClientEmail";
import { UserOfClientFullName } from "./UserOfClientFullName";
import { UserOfClientId } from "./UserOfClientId";
import { UserOfClientIdentification } from "./UserOfClientIdentification";
import { UserOfClientPassword } from "./UserOfClientPassword";


export class UserOfClient{

    readonly id:UserOfClientId
    readonly fullname:UserOfClientFullName
    readonly password:UserOfClientPassword
    readonly identification:UserOfClientIdentification
    readonly email:UserOfClientEmail
    readonly active:UserOfClientActive
    
   private constructor(
        id:UserOfClientId,
        fullname:UserOfClientFullName,
        identification:UserOfClientIdentification,
        password:UserOfClientPassword,
        email:UserOfClientEmail,
        active:UserOfClientActive
        ){

            this.id= id
            this.fullname=fullname
            this.password = password
            this.identification = identification
            this.email = email
            this.active = active
    }


    static create(
       params:{ 
        id:string,
        fullname:string,
        identification:string,
        password:string,
        email:string,
        active:boolean}
    ){

        return new UserOfClient( 
            new UserOfClientId(params.id),
            new UserOfClientFullName(params.fullname),
            new UserOfClientIdentification(params.identification),
            new UserOfClientPassword(params.password),
            new UserOfClientEmail(params.email),
            new UserOfClientActive(params.active)
            )
    }
}