import { Request, Response } from "express";
import { createToken } from "../../TokenManagement";
import interactors from "../core/interactors";

export const authClientController = async (req:Request,res:Response)=>{
    try{
        const { email,password ,value_backend_subdomain } = req.body

      //  console.log(email,password)

         const response = await interactors.authClientAuthInteractor(
            String(email),
            String(password),
            value_backend_subdomain
            )
         
         if(response== null) return res.status(500).json({message:"user doesn t exits"})

          const token=createToken(response,"CLIENT")

          return  res.status(200).json({token,master:true})
    }catch(error:any){
        return res.status(500).json({message:error.message})
    }
}