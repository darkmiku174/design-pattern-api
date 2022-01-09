import { Request, Response } from "express";
import Controller from "../controller";
import UserController from "../sub_controllers/userControllers";

export default class ProxyUserController implements Controller {
    private static instance: ProxyUserController;
    private constructor() { }
    public static getInstance(): ProxyUserController {
        if (!ProxyUserController.instance) {
            ProxyUserController.instance = new ProxyUserController();
        }

        return ProxyUserController.instance;
    }
    public GetAll(req: Request, res: Response): any {
        UserController.getInstance().GetAll(req, res)
    }
    public GetById(req: Request, res: Response): any {
        UserController.getInstance().GetById(req, res)
    }
    public Add(req: Request, res: Response): any {
        var { user_name, password, email } = req.body
        if (user_name == null || user_name == undefined) {
            console.log("Null User Name")
        } else if (password == null || password == undefined) {
            console.log("Null Password")
        } else if (email == null || email == undefined) {
            console.log("Null Email")
        } else {
            UserController.getInstance().Add(req, res)
        }
    }
    public Delete(req: Request, res: Response): any {
        UserController.getInstance().Add(req, res)
    }
}
