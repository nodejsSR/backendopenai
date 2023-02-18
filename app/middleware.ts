import { Request,Response, NextFunction } from "express"
import { verifytoken } from "./TokenManagement"


export const middlewareToken = (
    req:Request,
    res:Response,
    next:NextFunction
    ) =>{
        const {token} = req.body
        if (!token){
            return res.status(401).send('to\'ken not found')
        }
    try{
            const decoded = verifytoken(token)
             req.body.payload = decoded
             next()
    
     }catch (e) {
         
         return  res.status(400).send('invalid token')
     }
}

export const getSubdomainMiddleware = (  req:Request,
    res:Response,
    next:NextFunction)=>{
  try{
    const host = req.headers.origin as string
    const arrayOrigin = host.split(".")
  
    if(arrayOrigin.length==2)return res.status(500).json({message:"not found"})
    if(arrayOrigin.length>3) return res.status(500).json({message:"not found"})
    const dividir = arrayOrigin[0]
    const subdomain = dividir?.split("http://")[1]
    req.body.value_backend_subdomain=subdomain
    next()
  }catch(error:any){
    return res.status(500).json()
  }
}