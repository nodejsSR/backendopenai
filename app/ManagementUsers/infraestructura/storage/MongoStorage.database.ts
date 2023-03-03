import { mongoStorageManagement } from "../../../shared/Storage/mongoStorageManagement";
import { UserOfClient } from "../../core/entities/UserOfClient/UserOfClient";
import { UserOfClientId } from "../../core/entities/UserOfClient/UserOfClientId";
import { UserOCRepository, record } from "../../core/repository/UserOC.repository";
import bcrypt from "bcrypt"
const clientCollection = "clients"

export class MongoStorage implements UserOCRepository {
   
    async registerCliente(client: UserOfClient,dns:string): Promise<record> {

        try{
            
            const conexion = await  mongoStorageManagement.createConexion()
            const db = conexion.db(dns)
            const collection = db.collection(clientCollection)
          

            await collection.insertOne({
                                    id:client.id.value,
                                    fullname:client.fullname.value,
                                    identification:client.identification.value,
                                    email:client.email.value,
                                    password:bcrypt.hashSync(client.password.value,10),
                                    created:new Date().toISOString(),
                                    updated:new Date().toISOString(),
                                    active:true
                                })
                return {
                    id:client.id.value,
                    fullname:client.fullname.value,
                    identification:client.identification.value,
                    email:client.email.value,
                    active:client.active.value
                }
        }catch(error:any){
                 throw new Error(error.message)
        }
        
        
    }
    async removeClientById(clienId: UserOfClientId,dns:string): Promise<record> {
        try{
            const conexion = await  mongoStorageManagement.createConexion()
            const db = conexion.db(dns)
            const collection = db.collection(clientCollection)

           
            const response =  await collection.findOneAndUpdate({id:clienId.value},{
                $set:{
                    active:false,
                    updated:new Date().toISOString()
                }
            })
            
                return  { 
                    id:(response.value as any).id,
                    fullname:(response.value as any).fullname,
                    identification:(response.value as any).identification,
                    email:(response.value as any).email,
                    active:(response.value as any).active
                }
        }catch(error:any){
                 throw new Error(error.message)
        }
        
    }
   async  searchAllClient(dns:string): Promise<record[]> {
    
    try{
        
        const conexion = await  mongoStorageManagement.createConexion()
        const db = conexion.db(dns)
        const collection = db.collection(clientCollection)
    


          const responseTarget =await collection.find({active:true}).toArray()

            return  responseTarget as any[] as record[]
        }catch(error:any){
                throw new Error(error.message)
        }
    }

    async searchAndUpdateClientById(client: UserOfClient,dns:string): Promise<record> {
        try{
           
            const conexion = await  mongoStorageManagement.createConexion()
            const db = conexion.db(dns)
            const collection = db.collection(clientCollection)

            const response =  await collection.findOneAndUpdate({id:client.id.value,active:true},{$set:{
               // id: client.id.value,
                fullname:client.fullname.value,
                identification:client.identification.value,
                email:client.email.value,
                updated:new Date().toISOString()
               // active:client.active.value,
            }})
            
                return  { 
                    id:(response.value as any).id,
                    fullname:(response.value as any).fullname,
                    identification:(response.value as any).identification,
                    email:(response.value as any).email,
                    active:(response.value as any).active
                }
        }catch(error:any){
                 throw new Error(error.message)
        }
    }

    

}