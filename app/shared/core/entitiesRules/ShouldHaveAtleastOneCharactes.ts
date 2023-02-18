export const ShouldHaveAtleastOneCharacter=(value:string)=>{
    if(value.length==0) throw new Error("Should have at least one character")
}