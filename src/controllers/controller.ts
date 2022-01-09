import { Request, Response } from "express";

export default interface Controller {
    GetAll(_: Request, res: Response): any;
    GetById(req: Request, res: Response): any;
}
