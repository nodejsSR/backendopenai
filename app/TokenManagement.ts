import jwt from "jsonwebtoken"
type userType = "MASTER" | "CLIENT" | "USEROFCLIENT"
export const createToken = (data:object,type:userType) => {
    const seed = process.env.TOKEN_SEED
    return jwt.sign({...data,type:type},seed as string)
}

export const verifytoken = (token:string)=>{
    const seed = process.env.TOKEN_SEED
    return jwt.verify(token,seed as string)
}