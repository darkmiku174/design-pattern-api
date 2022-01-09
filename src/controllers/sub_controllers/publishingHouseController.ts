import { Request, Response } from "express";
import PublishingHouse from "../../models/publishingHouseSchema";
import Controller from "../controller";

export default class PublishingHouseController implements Controller {
    private static instance: PublishingHouseController;
    private constructor() { }
    public static getInstance(): PublishingHouseController {
        if (!PublishingHouseController.instance) {
            PublishingHouseController.instance = new PublishingHouseController();
        }

        return PublishingHouseController.instance;
    }
    public async GetAll(_: Request, res: Response) {
        const pubs = await PublishingHouse.find({})
        return res.json(pubs)
    }
    public async GetById(req: Request, res: Response) {
        const pub = await PublishingHouse.findById(req.params.Id)
        return res.json(pub);
    }
}