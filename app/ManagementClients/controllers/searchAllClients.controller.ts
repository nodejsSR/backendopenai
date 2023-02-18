import { Request, Response } from "express";
import interactor from "../core/interactor";

export const searchAllClientsController= async (req:Request,res:Response)=>{
       try{
            
        const response= await interactor.searchAllClientsInteractor()

                        return res.status(200).json(response)
       }catch(error:any){
        return res.status(500).json(error.message)
       }
}