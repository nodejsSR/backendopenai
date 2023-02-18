import { mongoStorageManagement } from "../../shared/Storage/mongoStorageManagement";
import { UserMaster } from "../core/entities/UserMaster/userMaster";
import { UserMasterEmail } from "../core/entities/UserMaster/userMasterEmail";
import { UserMasterFullname } from "../core/entities/UserMaster/userMasterFullname";
import { UserMasterId } from "../core/entities/UserMaster/userMasterId";
import { UserMasterPassword } from "../core/entities/UserMaster/userMasterPassword";
import { recordUserMaster, UserMasterRepository } from "../core/repository/UserMasterRepository";
import bcrypt from "bcrypt"
const dbOwner = "owner"
const masterCollection = "master"
const userCollection = ""

export class MongoStorageUserMaster implements UserMasterRepository {
    async createUserMaster(userMaster: UserMaster): Promise<recordUserMaster> {
        try{
            const conexion = await  mongoStorageManagement.createConexion()
            const db = conexion.db(dbOwner)
            const collection = db.collection(masterCollection)
            await collection.insertOne({
                id:userMaster.id.value,
                fullname:userMaster.fullname.value,
                email:userMaster.email.value,
                password:userMaster.password.value
            })

            return {
                id:userMaster.id.value,
                fullname:userMaster.fullname.value,
                email:userMaster.email.value
            }
            //throw new Error("Method not implemented.");

        }catch(error:any){
            throw new Error(error.message)
        }
       
    }
   async updateUserMaster(id: UserMasterId, fullname: UserMasterFullname, email: UserMasterEmail, password: UserMasterPassword): Promise<recordUserMaster> {
        try{
            const conexion = await  mongoStorageManagement.createConexion()
            const db = conexion.db(dbOwner)
            const collection = db.collection(masterCollection)

            const response =  await collection.findOneAndUpdate({id},{$set:{
                fullname:fullname.value,
                email:email.value,
                password:password.value
            }})

            return {
                id:id.value,
                fullname:fullname.value,
                email:email.value
            }

        }catch(error:any){
             throw new Error(error.message)
        }
    }
    async authUserMaster(email: UserMasterEmail, password: UserMasterPassword): Promise<recordUserMaster | null> {
        try{
              
            const conexion = await  mongoStorageManagement.createConexion()
            const db = conexion.db(dbOwner)
            const collection = db.collection(masterCollection)

            const response = await  collection.findOne({email:email.value})

            if(response==null) return null

            const result= bcrypt.compareSync(password.value,(response as any).password)
        
            if(!result) return null

         //  delete  (response as any).password

            return response as any as recordUserMaster

        }catch(error:any){
             throw new Error(error.message)
        }
    }
    async veirfyIfExistsRegister(): Promise<number> {
        try{
            const conexion = await  mongoStorageManagement.createConexion()
            const db = conexion.db(dbOwner)
            const collection = db.collection(masterCollection)

            const response = await  collection.find().toArray()

            return response.length

        }catch(error:any){
             throw new Error(error.message)
        }
    }

    async changePassword(id:string,password:string):Promise<any>{
        try{
            const conexion = await  mongoStorageManagement.createConexion()
            const db = conexion.db(dbOwner)
            const collection = db.collection(masterCollection)

       console.log(" miid ",id)
       console.log(" mi password ",password)
            
           await collection.findOneAndUpdate({id},{$set:{
                password:bcrypt.hashSync(password,10)
            }})

            return true

        }catch(error:any){
                  throw new Error(error.message)
        }
    }

}