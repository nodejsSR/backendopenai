
export abstract class ValidateBoolean{
    constructor(value:boolean){
        if(typeof value!=="boolean") throw new Error(`el valor ${value} no es un boolean`)
    }
}