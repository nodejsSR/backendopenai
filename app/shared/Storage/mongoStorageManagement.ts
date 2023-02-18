import { MongoClient }  from "mongodb"

export class mongoStorageManagement {

    private static conexion:null | MongoClient = null

    private static url = "mongodb://localhost:27017"

    static async createConexion(): Promise<MongoClient>{

        if(this.conexion === null){
            const client = new MongoClient(this.url,{auth:{username:"root",password:"root"}});
          await  client.connect()

          this.conexion=client
          return this.conexion
        }

        return this.conexion
        
    }
    
}