import express from 'express'
import ControllerFactory from '../controllers/controllerFactory'
import { ControllerType } from '../controllers/controllerTypes'

const router = express.Router()
var lib = ControllerFactory.createController(ControllerType.LIBRARIAN);
router.get("/", lib.GetAll)
router.get("/:Id", lib.GetById)
export default router