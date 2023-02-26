import { mongoStorageManagement } from "../../shared/Storage/mongoStorageManagement";
import bcrypt from "bcrypt"
import { ClientAuthRepository, recordUserMaster } from "../core/repository/ClientAuthRepository";
import { ClientAuth } from "../core/entities/ClientAuth/ClientAuth";
import { ClientAuthPassword } from "../core/entities/ClientAuth/ClientAuthPassword";
import { StudentsAuthRepository } from "../core/repository/StudentsAuthRepository";
//const dbOwner = "owner"
//const masterCollection = "master"
const userCollection = "clients"

export class MongoStorageStudent implements StudentsAuthRepository {
   async authenticarClient(clientAuth: ClientAuth, dns: string): Promise<any> {
        try{
            const conexion = await  mongoStorageManagement.createConexion()
            const db = conexion.db(dns)
            const collection = db.collection(userCollection)

            const entity = await collection.findOne({email:clientAuth.email.value,active:true})
                  console.log("entity1", entity)
            if(entity == null) return null
            console.log("entity2", entity)
            const result= bcrypt.compareSync(clientAuth.password.value,(entity as any).password)

            if(!result) return null

            return entity as any as  recordUserMaster

        }catch(error:any){
            throw new Error(error.message)
        }
    }
   async  changePassword(id: string,dns:string, password: ClientAuthPassword): Promise<any> {
            try{
                
                const conexion = await  mongoStorageManagement.createConexion()
                const db = conexion.db(dns)
                const collection = db.collection(userCollection)
                
                const result= await collection.findOne({id,dns,active:true})

                if(result === null) return null

                  await collection.findOneAndUpdate({id,dns,active:true},{$set:{
                    password:bcrypt.hashSync(password.value,10)
                 }})

                 return result as any as recordUserMaster
                 
            }catch(error:any){
             throw new Error(error.message)
            }
    }


}