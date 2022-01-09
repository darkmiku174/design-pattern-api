import express from 'express'
import ControllerFactory from '../controllers/controllerFactory'
import { ControllerType } from '../controllers/controllerTypes'

const router = express.Router()
var vocher = ControllerFactory.createController(ControllerType.VOCHER);
router.get("/", vocher.GetAll)
router.post("/add", vocher.Add)
router.get("/:Id", vocher.GetById)
router.route("/delete/:id").delete(vocher.Delete)
export default router