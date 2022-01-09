import { Request, Response } from "express";
import Controller from "../controller";
import VocherController from "../sub_controllers/vocherControllers";

export default class ProxyVocherController implements Controller {
    private static instance: ProxyVocherController;
    private constructor() { }
    public static getInstance(): ProxyVocherController {
        if (!ProxyVocherController.instance) {
            ProxyVocherController.instance = new ProxyVocherController();
        }

        return ProxyVocherController.instance;
    }
    public GetAll(req: Request, res: Response): any {
        VocherController.getInstance().GetAll(req, res)
    }
    public GetById(req: Request, res: Response): any {
        VocherController.getInstance().GetAll(req, res)
    }
    public Add(req: Request, res: Response): any {
        VocherController.getInstance().GetAll(req, res)

    }
    public Delete(req: Request, res: Response): any {
        VocherController.getInstance().GetAll(req, res)
    }
}
