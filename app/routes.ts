import { Request, Response, Router } from "express"
import { authClientController } from "./Authentication/controller/authClient.controller"
import { authStudentController } from "./Authentication/controller/authStudent.controller"
import { authUserMasterController } from "./Authentication/controller/authUserMasteController"
import { changePasswordMasterAuthController } from "./Authentication/controller/changePasswordMasterController"
import { changePasswordStudent } from "./Authentication/controller/changePasswordStudent.controller"
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
import { authStudentMobileController } from "./Authentication/controller/authStudentMobile.controller"

const router = Router()
router.all("/v1/test",(req:Request,res:Response)=>{

  return  res.status(200).json(
        {
            hola:"hola"
        }
    )

})
router.post("/v1/register-client",getSubdomainMiddleware,registerClientController)
router.post("/v1/remove-client-by-id",getSubdomainMiddleware,removeClientByIdController)
router.post("/v1/search-all-client",getSubdomainMiddleware,searchAllClientsController)
router.post("/v1/search-and-update-by-id",getSubdomainMiddleware,searchAndUpdateClientByIdController)
router.post("/v1/search-client-by-domain",getSubdomainMiddleware,searchClientByDomainController)

router.post("/v1/master/create-user",getSubdomainMiddleware,createUserMasterController)
router.post("/v1/master/update-user",getSubdomainMiddleware,updateUserMasterController)
router.post("/v1/master/verify-user",getSubdomainMiddleware,verifyUserMasterController)
router.post("/v1/master/auth-user",getSubdomainMiddleware,authUserMasterController)
router.post("/v1/master/change-password",getSubdomainMiddleware,changePasswordMasterAuthController)


router.post("/v1/client/update-user",getSubdomainMiddleware,updateUserMasterController)
router.post("/v1/client/auth-user",getSubdomainMiddleware,authClientController)
router.post("/v1/client/search-all-user-of-client",getSubdomainMiddleware,searchAllUserOCtsController)
router.post("/v1/client/register-user-of-client",getSubdomainMiddleware,registerUserOCController)
router.post("/v1/client/edit-user-of-client",getSubdomainMiddleware,searchAndUpdateUserOfClientByIdController)
router.post("/v1/client/delete-user-by-id",getSubdomainMiddleware,removeUserOCByIdController)

router.post("/v1/clientauth/change-password",getSubdomainMiddleware,changePasswordClientAuthController) 
router.post("/v1/clientauth/change-password-by-client",changePasswordClientAuthController) 


router.post("/v1/studentauth/auth-user",getSubdomainMiddleware,authStudentController)
router.post("/v1/studentauth-mobile/auth-user",getSubdomainMiddleware,authStudentMobileController)
router.post("/v1/studentauth/change-password",getSubdomainMiddleware,changePasswordStudent)
/*
router.post("/useroc/update-user",getSubdomainMiddleware,updateUserMasterController)
router.post("/useroc/auth-user",getSubdomainMiddleware,authUserMasterController)
*/


router.use("/ms-multitenant",router)

export default router