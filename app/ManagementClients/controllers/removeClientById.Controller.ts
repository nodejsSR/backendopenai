import { Request, Response } from "express";
import interactor from "../core/interactor";

export const removeClientByIdController = async (req:Request,res:Response)=>{
       try{
        const {id} = req.body
        const response= await interactor.removeClientByIdInteractor(id)

                        return res.status(200).json(response)
       }catch(error:any){
        return res.status(500).json(error.message)
       }
}