import express from 'express'
import ControllerFactory from '../controllers/controllerFactory'
import { ControllerType } from '../controllers/controllerTypes'

const router = express.Router()
var user = ControllerFactory.createController(ControllerType.USER);
router.get("/", user.GetAll)
router.post("/add", user.Add)
router.get("/:Id", user.GetById)
router.route("/delete/:id").delete(user.Delete)
export default router