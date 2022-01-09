import express from 'express'
import ControllerFactory from '../controllers/controllerFactory'
import { ControllerType } from '../controllers/controllerTypes'

const router = express.Router()
var collection = ControllerFactory.createController(ControllerType.COLLECTION);
router.get("/", collection.GetAll)
router.post("/add", collection.Add)
router.route("/name").get(collection.GetByName)
router.get("/:Id", collection.GetById)
router.route("/delete/:id").delete(collection.Delete)
export default router