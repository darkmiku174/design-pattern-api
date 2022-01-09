import { Request, Response } from "express";
import Game from "../../models/gameSchema";

export default class GameController {
    private static instance: GameController;
    private constructor() { }
    public static getInstance(): GameController {
        if (!GameController.instance) {
            GameController.instance = new GameController();
        }

        return GameController.instance;
    }
    public async GetAll(_: Request, res: Response) {
        const games = await Game.find({})
        return res.json(games)
    }
    public async GetById(req: Request, res: Response) {
        const game = await Game.findById(req.params.Id)
            .populate("included_in")
            .populate("includes")
        return res.json(game);
    }

    public async Add(req: Request, res: Response) {
        const game = await Game.create(req.body);
        if (game) {
            res.status(200).json({ message: "Add success" })
        } else {
            res.status(404).json({ message: "Error" })
        }
        return;
    }

    public async Delete(req: Request, res: Response) {
        const game = await Game.findByIdAndDelete(req.params.id)
        if (game) {
            res.status(200).json({ message: "Delete success" })
        } else {
            res.status(404).json({ message: "game not found" })
        }
        return;
    }
}