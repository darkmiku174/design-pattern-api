import { Request, Response } from "express";
import BorrowedTicket from "../../models/borrowedTicketSchema";
import Controller from "../controller";

export default class BorrowedTicketController implements Controller {
    private static instance: BorrowedTicketController;
    private constructor() { }
    public static getInstance(): BorrowedTicketController {
        if (!BorrowedTicketController.instance) {
            BorrowedTicketController.instance = new BorrowedTicketController();
        }

        return BorrowedTicketController.instance;
    }
    public async GetAll(_: Request, res: Response) {
        const bors = await BorrowedTicket.find({})
            .populate("librarian")
            .populate("array_books")
        return res.json(bors)
    }
    public async GetById(req: Request, res: Response) {
        const bor = await BorrowedTicket.findById(req.params.Id)
            .populate("librarian")
            .populate("array_books")
        return res.json(bor);
    }
}