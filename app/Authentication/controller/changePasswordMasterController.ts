import { Request, Response } from "express";
import { createToken } from "../../TokenManagement";
import interactors from "../core/interactors";

export const changePasswordMasterAuthController = async (req:Request,res:Response)=>{
    try{
        const { id,password  } = req.body

        //console.log(email,password)

         const response = await interactors.authMasterChangePasswordInteractor(
            id,
            password
            )
         
         if(response== null) return res.status(500).json({message:"user doesn t exits"})

        //  const token=createToken(response,"CLIENT")

          return  res.status(200).json(response)
    }catch(error:any){
        return res.status(500).json({message:error.message})
    }
}