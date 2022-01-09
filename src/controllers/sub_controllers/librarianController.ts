import { Request, Response } from "express";
import Librarian from "../../models/librarianSchema";
import Controller from "../controller";


export default class LibrarianController implements Controller  {
    private static instance: LibrarianController;
    private constructor() { }
    public static getInstance(): LibrarianController {
        if (!LibrarianController.instance) {
            LibrarianController.instance = new LibrarianController();
        }

        return LibrarianController.instance;
    }
    public async GetAll(_: Request, res: Response) {
        const libs= await Librarian.find({})
        return res.json(libs)
    }
    public async GetById(req: Request, res: Response) {
        const lib = await Librarian.findById(req.params.Id)
        return res.json(lib);
    }
}