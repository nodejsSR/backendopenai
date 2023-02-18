import * as dotenv from 'dotenv' 
dotenv.config()
import express from "express"
import cors  from "cors"
import router from "./routes"
const app = express()

app.use(express.json())
app.use(cors())

app.use(router)
app.listen(4000,()=>{
console.log("corriendo en puerto 4000")
})







