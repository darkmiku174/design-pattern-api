import express from 'express'
import ControllerFactory from '../controllers/controllerFactory'
import { ControllerType } from '../controllers/controllerTypes'

const router = express.Router()
var pub = ControllerFactory.createController(ControllerType.PUBLISHING_HOUSE);
router.get("/", pub.GetAll)
router.get("/:Id", pub.GetById)
export default router