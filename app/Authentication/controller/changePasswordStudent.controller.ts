import { Request, Response } from "express";
import interactors from "../core/interactors";



export const changePasswordStudent = async ( req:Request , res:Response ) => {
    try{

        const { password , iduser ,  value_backend_subdomain} = req.body
        const response= await interactors.changePasswordStudentInteractor({userid:iduser,password,dns:value_backend_subdomain});

        return res.status(200).json(response)
    }catch(error:any){
       return res.status(500).json({message:error.message})
    }
}