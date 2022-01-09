import { Request, Response } from "express";
import Cart from "../../models/cartSchema";

export default class CartController {
    private static instance: CartController;
    private constructor() { }
    public static getInstance(): CartController {
        if (!CartController.instance) {
            CartController.instance = new CartController();
        }

        return CartController.instance;
    }
    public async GetAll(_: Request, res: Response) {
        const carts = await Cart.find({})
            .populate("user")
            .populate("products.product")
        return res.json(carts)
    }
    public async GetById(req: Request, res: Response) {
        const cart = await Cart.findById(req.params.Id)
            .populate("user")
            .populate("products.product")
        return res.json(cart);
    }

    public async Add(req: Request, res: Response) {
        const cart = await Cart.create(req.body);
        if (cart) {
            res.status(200).json({ message: "Add success" })
        } else {
            res.status(404).json({ message: "Error" })
        }
        return;
    }

    public async Delete(req: Request, res: Response) {
        const cart = await Cart.findByIdAndDelete(req.params.id)
        if (cart) {
            res.status(200).json({ message: "Delete success" })
        } else {
            res.status(404).json({ message: "Cart not found" })
        }
        return;
    }
}