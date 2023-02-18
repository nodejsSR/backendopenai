import { Request, Response } from "express";
import { createToken } from "../../TokenManagement";
import interactors from "../core/interactors";

export const changePasswordClientAuthController = async (req:Request,res:Response)=>{
    try{
        const { id,password ,value_backend_subdomain } = req.body

        //console.log(email,password)

         const response = await interactors.authClientChangePasswordInteractor(
            id,
            value_backend_subdomain,
            password
            )
         
         if(response== null) return res.status(500).json({message:"user doesn t exits"})

        //  const token=createToken(response,"CLIENT")

          return  res.status(200).json(response)
    }catch(error:any){
        return res.status(500).json({message:error.message})
    }
}