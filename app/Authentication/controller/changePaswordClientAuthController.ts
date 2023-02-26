import { Request, Response } from "express";
import { createToken } from "../../TokenManagement";
import interactors from "../core/interactors";

export const changePasswordClientAuthController = async (req:Request,res:Response)=>{
    try{
        const { id,password ,dns } = req.body

        //console.log(email,password)
         console.log(id,
            dns,
            password)
         const response = await interactors.authClientChangePasswordInteractor(
            id,
            dns,
            password
            )
         
         if(response== null) return res.status(500).json({message:"user doesn t exits"})

        //  const token=createToken(response,"CLIENT")

          return  res.status(200).json(response)
    }catch(error:any){
        return res.status(500).json({message:error.message})
    }
}