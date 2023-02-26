import { Request, Response } from "express";
import { createToken } from "../../TokenManagement";
import interactors from "../core/interactors";

export const authUserMasterController = async (req:Request,res:Response)=>{
    try{
        const { email,password ,value_backend_subdomain} = req.body

        let response:any
        let token:string=""

        response = await interactors.authUserMasterInteractor(String(email),String(password))         
        if(response== null) return res.status(500).json({message:"user doesn t exits"})
        token=createToken(response,"MASTER")

          return  res.status(200).json(token)
    }catch(error:any){
        return res.status(500).json({message:error.message})
    }
}