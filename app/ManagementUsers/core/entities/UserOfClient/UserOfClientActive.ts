import { ValidateBoolean } from "../../../../shared/core/ValidateBoolean"

export class UserOfClientActive extends ValidateBoolean {

    readonly value:boolean

    constructor(value:boolean){
        super(value)
          this.value= value
    }
}