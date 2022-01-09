import express from 'express'
import ControllerFactory from '../controllers/controllerFactory'
import { ControllerType } from '../controllers/controllerTypes'

const router = express.Router()
var order = ControllerFactory.createController(ControllerType.ORDER);
router.get("/", order.GetAll)
router.post("/add", order.Add)
router.get("/:Id", order.GetById)
router.route("/delete/:id").delete(order.Delete)
export default router