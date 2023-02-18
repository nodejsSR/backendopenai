import { MongoStorageClientAuth } from "../../Infraestructura/MongoStorageClientMaster";
import { MongoStorageUserMaster } from "../../Infraestructura/MongoStorageUserMaster";
import { authClientAuthInteractor } from "./authClientAuth.interactor";
import { authUserMasterInteractor } from "./authUserMasterInteractor";
import { changePasswordMasterInteractor } from "./changePasswordMaster.interactor";
import { changePasswordClientAuthInteractor } from "./changePaswordClientAuth.interactor";
import { createUserMaster } from "./createUserMaster.interactor";
import { updateUserMaster } from "./updateUserMaster.interactor";
import { veirfyIfExistsRegisterInteractor } from "./verifyIfExitsRegister.interactor";

const repository = new MongoStorageUserMaster()
const ClientAuthRepository = new MongoStorageClientAuth()

export default {
    authUserMasterInteractor :authUserMasterInteractor(repository),
    createUserMasterInteractor : createUserMaster(repository),
    updateUserMasterInteractor : updateUserMaster(repository),
    verifyIfExistsRegisterInteractor:veirfyIfExistsRegisterInteractor(repository),
    authClientAuthInteractor: authClientAuthInteractor(ClientAuthRepository),
    authClientChangePasswordInteractor: changePasswordClientAuthInteractor(ClientAuthRepository),
    authMasterChangePasswordInteractor:changePasswordMasterInteractor(repository)
}