import express from 'express'
import ControllerFactory from '../controllers/controllerFactory'
import { ControllerType } from '../controllers/controllerTypes'

const router = express.Router()
var cart = ControllerFactory.createController(ControllerType.CART);
router.get("/", cart.GetAll)
router.post("/add", cart.Add)
router.get("/:Id", cart.GetById)
router.route("/delete/:id").delete(cart.Delete)
export default router