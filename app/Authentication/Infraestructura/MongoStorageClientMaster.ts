import { mongoStorageManagement } from "../../shared/Storage/mongoStorageManagement";
import bcrypt from "bcrypt"
import { ClientAuthRepository, recordUserMaster } from "../core/repository/ClientAuthRepository";
import { ClientAuth } from "../core/entities/ClientAuth/ClientAuth";
import { ClientAuthPassword } from "../core/entities/ClientAuth/ClientAuthPassword";
const dbOwner = "owner"
//const masterCollection = "master"
const userCollection = "clients"

export class MongoStorageClientAuth implements ClientAuthRepository {
   async authenticarClient(clientAuth: ClientAuth, dns: string): Promise<recordUserMaster | null> {
        try{

            //console.log(clientAuth)
            const conexion = await  mongoStorageManagement.createConexion()
            const db = conexion.db(dbOwner)
            const collection = db.collection(userCollection)

            const entity = await collection.findOne({email:clientAuth.email.value,dns,active:true})
                  
            if(entity == null) return null

            const result= bcrypt.compareSync(clientAuth.password.value,(entity as any).password)

            if(!result) return null

            return entity as any as  recordUserMaster

        }catch(error:any){
            throw new Error(error.message)
        }
    }
   async  changePassword(id: string,dns:string, password: ClientAuthPassword): Promise<recordUserMaster | null> {
            try{
                
                const conexion = await  mongoStorageManagement.createConexion()
                const db = conexion.db(dbOwner)
                const collection = db.collection(userCollection)
                
                const result= await collection.findOne({id,dns,active:true})

                console.log("result ",id,dns, password)

                if(result === null) return null
                const password_gen=bcrypt.hashSync(password.value,10)

                console.log("password gen", password_gen)

                 const resultado= await collection.findOneAndUpdate({id,dns,active:true},{$set:{
                    password:password_gen
                 }})

                 console.log("result ",resultado)

                 return result as any as recordUserMaster
                 
            }catch(error:any){
             throw new Error(error.message)
            }
    }


}