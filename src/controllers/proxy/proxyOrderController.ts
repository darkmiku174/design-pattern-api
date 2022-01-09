import { Request, Response } from "express";
import Controller from "../controller";
import OrderController from "../sub_controllers/orderControllers";

export default class ProxyOrderController implements Controller {
    private static instance: ProxyOrderController;
    private constructor() { }
    public static getInstance(): ProxyOrderController {
        if (!ProxyOrderController.instance) {
            ProxyOrderController.instance = new ProxyOrderController();
        }

        return ProxyOrderController.instance;
    }
    public GetAll(req: Request, res: Response): any {
        OrderController.getInstance().GetAll(req, res)
    }
    public GetById(req: Request, res: Response): any {
        OrderController.getInstance().GetAll(req, res)
    }
    public Add(req: Request, res: Response): any {
        OrderController.getInstance().GetAll(req, res)

    }
    public Delete(req: Request, res: Response): any {
        OrderController.getInstance().GetAll(req, res)
    }
}
