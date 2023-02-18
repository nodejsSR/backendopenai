import { Request, Response } from "express";
import interactor from "../core/interactor";

export const searchAllUserOCtsController= async (req:Request,res:Response)=>{
       try{
              const {value_backend_subdomain} = req.body 
        const response= await interactor.searchAllUserOCInteractor(value_backend_subdomain)

                        return res.status(200).json(response)
       }catch(error:any){
        return res.status(500).json(error.message)
       }
}