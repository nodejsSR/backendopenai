import { Router } from "express"
import { authClientController } from "./Authentication/controller/authClient.controller"
import { authUserMasterController } from "./Authentication/controller/authUserMasteController"
import { changePasswordMasterAuthController } from "./Authentication/controller/changePasswordMasterController"
import { changePasswordClientAuthController } from "./Authentication/controller/changePaswordClientAuthController"
import { createUserMasterController } from "./Authentication/controller/createUserMasterController"
import { updateUserMasterController } from "./Authentication/controller/updateUserMasterController"
import { verifyUserMasterController } from "./Authentication/controller/verifyUserMasterController"
import { registerClientController } from "./ManagementClients/controllers/registerClient.controller"
import { removeClientByIdController } from "./ManagementClients/controllers/removeClientById.Controller"
import { searchAllClientsController } from "./ManagementClients/controllers/searchAllClients.controller"
import { searchAndUpdateClientByIdController } from "./ManagementClients/controllers/searchAndUpdateById.controller"
import { searchClientByDomainController } from "./ManagementClients/controllers/searchClientByDomain.controller"
import { registerUserOCController } from "./ManagementUsers/controllers/registerUserOC.controller"
import { removeUserOCByIdController } from "./ManagementUsers/controllers/removeUserOfClientById.Controller"
import { searchAllUserOCtsController } from "./ManagementUsers/controllers/searchAllUserOfClient.controller"
import { searchAndUpdateUserOfClientByIdController } from "./ManagementUsers/controllers/searchAndUpdateById.controller"
import { getSubdomainMiddleware } from "./middleware"

const router = Router()
router.post("/register-client",getSubdomainMiddleware,registerClientController)
router.post("/remove-client-by-id",getSubdomainMiddleware,removeClientByIdController)
router.post("/search-all-client",getSubdomainMiddleware,searchAllClientsController)
router.post("/search-and-update-by-id",getSubdomainMiddleware,searchAndUpdateClientByIdController)
router.post("/search-client-by-domain",getSubdomainMiddleware,searchClientByDomainController)

router.post("/master/create-user",getSubdomainMiddleware,createUserMasterController)
router.post("/master/update-user",getSubdomainMiddleware,updateUserMasterController)
router.post("/master/verify-user",getSubdomainMiddleware,verifyUserMasterController)
router.post("/master/auth-user",getSubdomainMiddleware,authUserMasterController)
router.post("/master/change-password",getSubdomainMiddleware,changePasswordMasterAuthController)


router.post("/client/update-user",getSubdomainMiddleware,updateUserMasterController)
router.post("/client/auth-user",getSubdomainMiddleware,authClientController)
router.post("/client/search-all-user-of-client",getSubdomainMiddleware,searchAllUserOCtsController)
router.post("/client/register-user-of-client",getSubdomainMiddleware,registerUserOCController)
router.post("/client/edit-user-of-client",getSubdomainMiddleware,searchAndUpdateUserOfClientByIdController)
router.post("/client/delete-user-by-id",getSubdomainMiddleware,removeUserOCByIdController)

router.post("/clientauth/change-password",getSubdomainMiddleware,changePasswordClientAuthController) 

/*
router.post("/useroc/update-user",getSubdomainMiddleware,updateUserMasterController)
router.post("/useroc/auth-user",getSubdomainMiddleware,authUserMasterController)
*/


router.use("/v1",router)

export default router