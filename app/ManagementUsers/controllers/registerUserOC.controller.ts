import { Request, Response } from "express";
import uniqid from "uniqid"
import interactor from "../core/interactor";

export const registerUserOCController = async (req:Request,res:Response)=>{
       try{
        const {fullname,identification,email,value_backend_subdomain} = req.body
        const response= await interactor.registerUserOCInteractor({
                            id: uniqid(),
                            fullname:fullname,
                            identification:identification,
                            password:"123456789",
                            email:email,
                            active:true 
                        },value_backend_subdomain)

                        return res.status(200).json(response)
       }catch(error:any){
        return res.status(500).json(error.message)
       }
}