import { Request, Response } from "express";
import Vocher from "../../models/vocherSchema";


export default class VocherController {
    private static instance: VocherController;
    private constructor() { }
    public static getInstance(): VocherController {
        if (!VocherController.instance) {
            VocherController.instance = new VocherController();
        }

        return VocherController.instance;
    }
    public async GetAll(_: Request, res: Response) {
        const vochers = await Vocher.find({})
        return res.json(vochers)
    }
    public async GetById(req: Request, res: Response) {
        const vocher = await Vocher.findById(req.params.Id)
            .populate("list_game")
        return res.json(vocher);
    }

    public async Add(req: Request, res: Response) {
        const vocher = await Vocher.create(req.body);
        if (vocher) {
            res.status(200).json({ message: "Add success" })
        } else {
            res.status(404).json({ message: "Error" })
        }
        return;
    }

    public async Delete(req: Request, res: Response) {
        const vocher = await Vocher.findByIdAndDelete(req.params.id)
        if (vocher) {
            res.status(200).json({ message: "Delete success" })
        } else {
            res.status(404).json({ message: "vocher not found" })
        }
        return;
    }
}