import { mongoStorageManagement } from "../../../shared/Storage/mongoStorageManagement";
import { Client } from "../../core/entities/Client/Client";
import { ClientDns } from "../../core/entities/Client/ClientDns";
import { ClientId } from "../../core/entities/Client/ClientId";
import { ClientRepository, record } from "../../core/repository/Client.repository";

const dbOwner = "owner"
const clientCollection = "clients"

export class MongoStorage implements ClientRepository {
   
    async registerCliente(client: Client): Promise<record> {

        try{
            
            const conexion = await  mongoStorageManagement.createConexion()
            const db = conexion.db(dbOwner)
            const collection = db.collection(clientCollection)
            await collection.insertOne({
                                    id:client.id.value,
                                    fullname:client.fullname.value,
                                    identification:client.identification.value,
                                    password:client.password.value,
                                    enterprise:client.enterprise.value,
                                    email:client.email.value,
                                    dns:client.dns.value,
                                    database:client.database.value,
                                    active:client.active.value
                                })
                return {
                    id:client.id.value,
                    fullname:client.fullname.value,
                    identification:client.identification.value,
                    enterprise:client.enterprise.value,
                    email:client.email.value,
                    dns:client.dns.value,
                    database:client.database.value,
                    active:client.active.value
                }
        }catch(error:any){
                 throw new Error(error.message)
        }
        
        
    }
    async removeClientById(clienId: ClientId): Promise<record> {
        try{
            const conexion = await  mongoStorageManagement.createConexion()
            const db = conexion.db(dbOwner)
            const collection = db.collection(clientCollection)

            const response =  await collection.findOneAndUpdate({id:clienId.value},{$set:{active:false}})
            
                return  { id:(response.value as any).id,
                    fullname:(response.value as any).fullname,
                    identification:(response.value as any).identification,
                    enterprise:(response.value as any).enterprise,
                    email:(response.value as any).email,
                    dns:(response.value as any).dns,
                    database:(response.value as any).database,
                    active:(response.value as any).active,}
        }catch(error:any){
                 throw new Error(error.message)
        }
        
    }
   async  searchAllClient(): Promise<record[]> {
    
    try{
        
        const conexion = await  mongoStorageManagement.createConexion()
        const db = conexion.db(dbOwner)
        const collection = db.collection(clientCollection)
        const response = await collection.find({active:true}).toArray()

        /* let response:record[] = []
        cursor.forEach(data=>{
            response = response.concat({
                id: data.id,
                fullname:data.fullname,
                identification:data.identification,
                enterprise:data.enterprise,
                email:data.email,
                dns:data.dns,
                database:data.database,
                active:data.active,
             })
        })
         */
            return  response as any as record[]
        }catch(error:any){
                throw new Error(error.message)
        }
    }

    async searchAndUpdateClientById(client: Client): Promise<record> {
        try{
            const conexion = await  mongoStorageManagement.createConexion()
            const db = conexion.db(dbOwner)
            const collection = db.collection(clientCollection)
            console.log(" email value ",client.email.value)
            const response =  await collection.findOneAndUpdate({id:client.id.value,active:true},{$set:{
               // id: client.id.value,
                fullname:client.fullname.value,
                identification:client.identification.value,
                enterprise:client.enterprise.value,
                email:client.email.value,
                dns:client.dns.value,
                //database:client.dns.value,
               // active:client.active.value,
            }})
            
                return  { id:(response.value as any).id,
                    fullname:(response.value as any).fullname,
                    identification:(response.value as any).identification,
                    enterprise:(response.value as any).enterprise,
                    email:(response.value as any).email,
                    dns:(response.value as any).dns,
                    database:(response.value as any).database,
                    active:(response.value as any).active}
        }catch(error:any){
                 throw new Error(error.message)
        }
    }
    async searchClientByDomain(clientDns: ClientDns): Promise< record | null> {
        try{
            const conexion = await  mongoStorageManagement.createConexion()
            const db = conexion.db(dbOwner)
            const collection = db.collection(clientCollection)
            const data =  await collection.findOne({dns:clientDns.value})


            if(clientDns.value=="master") return {} as any as record
    
            if (data == null) return null
            
                return  { id:data.id,
                    fullname:data.fullname,
                    identification:data.id,
                    enterprise:data.enterprise,
                    email:data.email,
                    dns:data.dns,
                    database:data.database,
                    active:data.active}
            }catch(error:any){
                    throw new Error(error.message)
            }
    }
    

}