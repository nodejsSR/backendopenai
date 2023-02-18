import { Request, Response } from "express";
import interactor from "../core/interactor";

export const searchAndUpdateClientByIdController = async (req:Request,res:Response)=>{
       try{
        const {id,fullname,identification,enterprise,email,dns} = req.body

    console.log("dns",dns)
        const response= await interactor.searchAndUpdateClientByIdInteractor({
            id:id,
            fullname:fullname,
            identification,
            password:"no se actualizara",
            enterprise,
            email,
            dns:dns,
            database:"no se actualizara",
            active:true
        })

                        return res.status(200).json(response)
       }catch(error:any){
        return res.status(500).json(error.message)
       }
}