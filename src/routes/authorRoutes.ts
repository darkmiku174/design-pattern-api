import express from 'express'
import ControllerFactory from '../controllers/controllerFactory'
import { ControllerType } from '../controllers/controllerTypes'

const router = express.Router()
var author = ControllerFactory.createController(ControllerType.AUTHOR);
router.get("/", author.GetAll)
router.get("/:Id", author.GetById)

export default router