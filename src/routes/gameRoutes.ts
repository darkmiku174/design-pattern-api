import express from 'express'
import ControllerFactory from '../controllers/controllerFactory'
import { ControllerType } from '../controllers/controllerTypes'

const router = express.Router()
var game = ControllerFactory.createController(ControllerType.GAME);
router.get("/", game.GetAll)
router.post("/add", game.Add)
router.get("/:Id", game.GetById)
router.route("/delete/:id").delete(game.Delete)
export default router