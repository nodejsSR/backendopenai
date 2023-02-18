import { Request, Response } from "express";
import interactor from "../core/interactor";

export const searchClientByDomainController = async (req:Request,res:Response)=>{

       try{

        const host = req.headers.host
        //const response= await interactor.searchClientByDomainInteractor(host as string)
        
         return res.status(200).json(host)
       }catch(error:any){
        return res.status(500).json(error.message)
       }
}