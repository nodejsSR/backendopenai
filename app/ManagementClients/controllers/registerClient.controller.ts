import { Request, Response } from "express";
import uniqid from "uniqid"
import interactor from "../core/interactor";
import bcrypt from "bcrypt" 

export const registerClientController = async (req:Request,res:Response)=>{
       try{
        const {fullname,identification,enterprise,email,dns} = req.body
        const response= await interactor.registeClientInteractor({
                            id: uniqid(),
                            fullname:fullname,
                            identification:identification,
                            password:"123456789" ,
                            enterprise:enterprise ,
                            email:email ,
                            dns:dns ,
                            database:dns ,
                            active:true ,
                        })

                        return res.status(200).json(response)
       }catch(error:any){
        return res.status(500).json(error.message)
       }
}