

export abstract class ValidateString{
    constructor(value:string){
        if(typeof value!=="string") throw new Error(`el valor ${value} no es un string`)
    }
}