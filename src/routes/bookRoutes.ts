import express from 'express'
import ControllerFactory from '../controllers/controllerFactory'
import { ControllerType } from '../controllers/controllerTypes'
const router = express.Router()
var book = ControllerFactory.createController(ControllerType.BOOK)
router.get("/", book.GetAll)
router.get("/:Id", book.GetById)
export default router