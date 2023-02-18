import { Request, Response } from "express";
import interactors from "../core/interactors";

export const updateUserMasterController = async (req:Request,res:Response)=>{
    try{
        const { id,fullname,email,password } = req.body

         const response = await interactors.updateUserMasterInteractor(
            id,
            fullname,
            email,
            password
         )

          return  res.status(200).json(response)
    }catch(error:any){
        return res.status(500).json({message:error.message})
    }
}