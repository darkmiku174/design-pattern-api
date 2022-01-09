import { Request, Response } from "express";
import Controller from "../controller";
import CollectionController from "../sub_controllers/collectionControllers";

export default class ProxyCollectionController implements Controller {
    private static instance: ProxyCollectionController;
    private constructor() { }
    public static getInstance(): ProxyCollectionController {
        if (!ProxyCollectionController.instance) {
            ProxyCollectionController.instance = new ProxyCollectionController();
        }

        return ProxyCollectionController.instance;
    }
    public GetAll(req: Request, res: Response): any {
        CollectionController.getInstance().GetAll(req, res)
    }
    public GetById(req: Request, res: Response): any {
        CollectionController.getInstance().GetAll(req, res)
    }
    public async GetByName(req: Request, res: Response) {
        CollectionController.getInstance().GetByName(req, res)
    }
    public Add(req: Request, res: Response): any {
        CollectionController.getInstance().GetAll(req, res)

    }
    public Delete(req: Request, res: Response): any {
        CollectionController.getInstance().GetAll(req, res)
    }
}
