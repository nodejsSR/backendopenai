import { Request, Response } from "express";
import interactors from "../core/interactors";
import uniqid from "uniqid"
import bcrypt from "bcrypt"

export const createUserMasterController = async (req:Request,res:Response)=>{
    try{
        const { fullname,email,password } = req.body

         const response = await interactors.createUserMasterInteractor(
            uniqid(),
            fullname,
            email,
            bcrypt.hashSync(password,10) 
         )

          

          return  res.status(200).json(response)
    }catch(error:any){
        return res.status(500).json({message:error.message})
    }
}