import { Request, Response } from "express";
import Book from "../../models/bookSchema";
import Controller from "../controller";


export default class BookController implements Controller {
    private static instance: BookController;
    private constructor() { }
    public static getInstance(): BookController {
        if (!BookController.instance) {
            BookController.instance = new BookController();
        }

        return BookController.instance;
    }
    public async GetAll(_: Request, res: Response) {
        const books = await Book.find({})
            .populate("author")
            .populate("publishing_house")
        return res.json(books)
    }
    public async GetById(req: Request, res: Response) {
        const book = await Book.findById(req.params.Id)
            .populate("author")
            .populate("publishing_house")
        return res.json(book);
    }
}