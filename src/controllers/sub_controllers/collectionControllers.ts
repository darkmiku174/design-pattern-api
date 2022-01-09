import { Request, Response } from "express";
import Collection from "../../models/collectionSchema";


export default class CollectionController {
    private static instance: CollectionController;
    private constructor() { }
    public static getInstance(): CollectionController {
        if (!CollectionController.instance) {
            CollectionController.instance = new CollectionController();
        }

        return CollectionController.instance;
    }
    public async GetAll(_: Request, res: Response) {
        const collections = await Collection.find({})
        return res.json(collections)
    }
    public async GetById(req: Request, res: Response) {
        const collection = await Collection.findById(req.params.Id)
            .populate({
                path: "list_game"
            })
        return res.json(collection);
    }

    public async GetByName(req: Request, res: Response) {
        const { names } = req.query;
        if (!names) {
            return res.status(400).json({ message: "required collection names" });
        }
        try {
            const collections = await Collection.find({
                name: { $in: names },
            }).populate({
                path: "list_game",
                select: "name developer images sale_price",
            });
            return res.status(200).json(collections);
        } catch (error) {
            console.log(error)
            return res.status(500);
        }
    }

    public async Add(req: Request, res: Response) {
        const collection = await Collection.create(req.body);
        if (collection) {
            res.status(200).json({ message: "Add success" })
        } else {
            res.status(404).json({ message: "Error" })
        }
        return;
    }

    public async Delete(req: Request, res: Response) {
        const collection = await Collection.findByIdAndDelete(req.params.id)
        if (collection) {
            res.status(200).json({ message: "Delete success" })
        } else {
            res.status(404).json({ message: "collection not found" })
        }
        return;
    }
}