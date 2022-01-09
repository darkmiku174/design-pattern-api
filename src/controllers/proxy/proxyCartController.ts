import { Request, Response } from "express";
import Controller from "../controller";
import CartController from "../sub_controllers/cartControllers";

export default class ProxyCartController implements Controller {
    private static instance: ProxyCartController;
    private constructor() { }
    public static getInstance(): ProxyCartController {
        if (!ProxyCartController.instance) {
            ProxyCartController.instance = new ProxyCartController();
        }

        return ProxyCartController.instance;
    }
    public GetAll(req: Request, res: Response): any {
        CartController.getInstance().GetAll(req, res)
    }
    public GetById(req: Request, res: Response): any {
        CartController.getInstance().GetAll(req, res)
    }
    public Add(req: Request, res: Response): any {
        CartController.getInstance().GetAll(req, res)

    }
    public Delete(req: Request, res: Response): any {
        CartController.getInstance().GetAll(req, res)
    }
}
