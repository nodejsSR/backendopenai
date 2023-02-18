import { MongoStorage } from "../../infraestructura/storage/MongoStorage.database";
import { registerUserOCInteractor } from "./registerUserOC.interactor";
import { removeUserOCByIdInteractor } from "./removeUserOCById.interactor";
import { searchAllUserOCInteractor } from "./searchAllUserOC.interactor";
import { searchAndUpdateUserOCByIdInteractor } from "./searchAndUpdateUserOCById.interactor";

const repository = new MongoStorage()

export default {
    registerUserOCInteractor: registerUserOCInteractor(repository),
    removeUserOCByIdInteractor : removeUserOCByIdInteractor(repository),
    searchAllUserOCInteractor : searchAllUserOCInteractor(repository),
    searchAndUpdateUserOCByIdInteractor : searchAndUpdateUserOCByIdInteractor(repository)
}