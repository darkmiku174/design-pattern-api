import { Request, Response } from "express";
import User from "../../models/userSchema";
import Controller from "../controller";

export default class UserController {
    private static instance: UserController;
    private constructor() { }
    public static getInstance(): UserController {
        if (!UserController.instance) {
            UserController.instance = new UserController();
        }

        return UserController.instance;
    }
    public async GetAll(_: Request, res: Response) {
        const users = await User.find({})
        return res.json(users)
    }
    public async GetById(req: Request, res: Response) {
        const user = await User.findById(req.params.Id)
        return res.json(user);
    }

    public async Add(req: Request, res: Response) {
        const user = await User.create(req.body);
        if (user) {
            res.status(200).json({ message: "Add success" })
        } else {
            res.status(404).json({ message: "Error" })
        }
        return;
    }

    public async Delete(req: Request, res: Response) {
        const user = await User.findByIdAndDelete(req.params.id)
        if (user) {
            res.status(200).json({ message: "Delete success" })
        } else {
            res.status(404).json({ message: "user not found" })
        }
        return;
    }
}