import { Request, Response } from "express";
import interactor from "../core/interactor";

export const searchAndUpdateUserOfClientByIdController = async (req:Request,res:Response)=>{
       try{
        const {id,fullname,identification,email,value_backend_subdomain} = req.body
        const response= await interactor.searchAndUpdateUserOCByIdInteractor({
            id:id,
            fullname,
            identification,
            email,
            active:true
        },value_backend_subdomain)

                        return res.status(200).json(response)
       }catch(error:any){
        return res.status(500).json(error.message)
       }
}