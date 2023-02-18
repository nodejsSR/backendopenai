import { ValidateBoolean } from "../../../../shared/core/ValidateBoolean"

export class ClientActive extends ValidateBoolean {

    readonly value:boolean

    constructor(value:boolean){
        super(value)
          this.value= value
    }
}