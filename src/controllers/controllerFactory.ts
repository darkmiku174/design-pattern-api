import { Request, Response } from "express";
import Controller from "./controller";
import { ControllerType } from "./controllerTypes";
import ProxyCartController from "./proxy/proxyCartController";
import ProxyCollectionController from "./proxy/proxyCollectionController";
import ProxyGameController from "./proxy/proxyGameController";
import ProxyOrderController from "./proxy/proxyOrderController";
import ProxyUserController from "./proxy/proxyUserController";
import VocherController from "./sub_controllers/vocherControllers";

export default class ControllerFactory implements Controller {
    public GetAll(_: Request, res: Response): any {
        //do somthing
    }
    public GetById(req: Request, res: Response): any {
        //do somthing
    }
    public Add(req: Request, res: Response): any {
        //do somthing
    }
    public Delete(req: Request, res: Response): any {
        //do somthing
    }
    public static createController(type: ControllerType): any {
        switch (type) {
            case ControllerType.CART:
                return ProxyCartController.getInstance();
            case ControllerType.COLLECTION:
                return ProxyCollectionController.getInstance();
            case ControllerType.GAME:
                return ProxyGameController.getInstance();
            case ControllerType.ORDER:
                return ProxyOrderController.getInstance();
            case ControllerType.USER:
                return ProxyUserController.getInstance();
            case ControllerType.VOCHER:
                return VocherController.getInstance();
            default:
                return null;
        }
    }
}