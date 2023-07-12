import { MongoClient }  from "mongodb"

export class mongoStorageManagement {

    private static conexion:null | MongoClient = null
    private static url = process.env.MONGO_URL as string
    static async createConexion(): Promise<MongoClient>{
        if(this.conexion === null){
            const client = new MongoClient(this.url);
          await  client.connect()
          this.conexion=client
          return this.conexion
        }
        return this.conexion   
    }
}