import { ClientActive } from "./ClientActive";
import { ClientDatabase } from "./ClientDatabase";
import { ClientDns } from "./ClientDns";
import { ClientEmail } from "./ClientEmail";
import { ClientEnterprise } from "./ClientEnterprise";
import { ClientFullName } from "./ClientFullName";
import { ClientId } from "./ClientId";
import { ClientIdentification } from "./ClientIdentification";
import { ClientPassword } from "./ClientPassword";


export class Client{

    readonly id:ClientId
    readonly fullname:ClientFullName
    readonly password:ClientPassword
    readonly identification:ClientIdentification
    readonly enterprise:ClientEnterprise
    readonly email:ClientEmail
    readonly dns:ClientDns
    readonly database:ClientDatabase
    readonly active:ClientActive
    
   private constructor(id:ClientId,
        fullname:ClientFullName,
        identification:ClientIdentification,
        password:ClientPassword,
        enterprise:ClientEnterprise,
        email:ClientEmail,
        dns:ClientDns,
        database:ClientDatabase,
        active:ClientActive
        ){

            this.id= id
            this.fullname=fullname
            this.password = password
            this.identification = identification
            this.enterprise = enterprise
            this.email = email
            this.dns = dns
            this.database = database
            this.active = active
    }


    static create(
       params:{ id:string,
        fullname:string,
        identification:string,
        password:string,
        enterprise:string,
        email:string,
        dns:string,
        database:string,
        active:boolean}
    ){

        return new Client( 
            new ClientId(params.id),
            new ClientFullName(params.fullname),
            new ClientIdentification(params.identification),
            new ClientPassword(params.password),
            new ClientEnterprise(params.enterprise),
            new ClientEmail(params.email),
            new ClientDns(params.dns),
            new ClientDatabase(params.database),
            new ClientActive(params.active)
            )
    }
}