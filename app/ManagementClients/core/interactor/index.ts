import { MongoStorage } from "../../infraestructura/storage/MongoStorage.database";
import { registerClienteInteractor } from "./registerClient.interactor";
import { removeClientByIdInteractor } from "./removeClientById.interactor";
import { searchAllClientsInteractor } from "./searchAllClients.interactor";
import { searchAndUpdateClientByIdInteractor } from "./searchAndUpdateClientById.interactor";
import { searchClientByDomain } from "./searchClientByDomain.interactor";

const repository = new MongoStorage()

export default {
    registeClientInteractor: registerClienteInteractor(repository),
    removeClientByIdInteractor : removeClientByIdInteractor(repository),
    searchAllClientsInteractor : searchAllClientsInteractor(repository),
    searchAndUpdateClientByIdInteractor : searchAndUpdateClientByIdInteractor(repository),
    searchClientByDomainInteractor:searchClientByDomain(repository)

}