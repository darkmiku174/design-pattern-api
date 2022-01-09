import { Request, Response } from "express";
import Controller from "../controller";
import GameController from "../sub_controllers/gameControllers";

export default class ProxyGameController implements Controller {
    private static instance: ProxyGameController;
    private constructor() { }
    public static getInstance(): ProxyGameController {
        if (!ProxyGameController.instance) {
            ProxyGameController.instance = new ProxyGameController();
        }

        return ProxyGameController.instance;
    }
    public GetAll(req: Request, res: Response): any {
        GameController.getInstance().GetAll(req, res)
    }
    public GetById(req: Request, res: Response): any {
        GameController.getInstance().GetAll(req, res)
    }
    public Add(req: Request, res: Response): any {
        GameController.getInstance().GetAll(req, res)

    }
    public Delete(req: Request, res: Response): any {
        GameController.getInstance().GetAll(req, res)
    }
}
