import { Request, Response } from "express";
import interactors from "../core/interactors";

export const verifyUserMasterController = async (req:Request,res:Response)=>{
    try{
    
         const response = await interactors.verifyIfExistsRegisterInteractor()
          return  res.status(200).json(response)

    }catch(error:any){
        
        return res.status(500).json({message:error.message})
    }
}