import jwt from "jsonwebtoken"
type userType = "MASTER" | "CLIENT" | "STUDENT"
export const createToken = (data:object,type:userType) => {
    const seed = "Y9yNYTQVki6MLnGnQORQHg"
    return jwt.sign({...data,type:type},seed as string)
}

export const verifytoken = (token:string)=>{
    const seed = "Y9yNYTQVki6MLnGnQORQHg"
    return jwt.verify(token,seed as string)
}