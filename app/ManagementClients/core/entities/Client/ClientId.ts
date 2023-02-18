import { ShouldHaveAtleastOneCharacter } from "../../../../shared/core/entitiesRules/ShouldHaveAtleastOneCharactes"
import { ValidateString } from "../../../../shared/core/ValidateString"

export class ClientId extends ValidateString{

    readonly value:string

    constructor(value:string){
        super(value)
        ShouldHaveAtleastOneCharacter(value)  
          this.value= value
    }

}