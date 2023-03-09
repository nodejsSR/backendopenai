import * as dotenv from 'dotenv'
import http from "http"
dotenv.config()
import express from "express"
import cors  from "cors"
import router from "./routes"
const app = express()

app.use(express.json())
app.use(cors())

app.use(router)

http.createServer(app).listen(4000,"0.0.0.0",()=>{
    console.log("corriendo en puerto 4000")
})






