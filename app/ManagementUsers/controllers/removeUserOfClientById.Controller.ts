import { Request, Response } from "express";
import interactor from "../core/interactor";

export const removeUserOCByIdController = async (req:Request,res:Response)=>{
       try{
            
        const {id,value_backend_subdomain} = req.body

        console.log("id ",id)
        const response= await interactor.removeUserOCByIdInteractor(id,value_backend_subdomain)
        return res.status(200).json(response)
       }catch(error:any){
        return res.status(500).json(error.message)
       }
}