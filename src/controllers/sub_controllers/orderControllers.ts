import { Request, Response } from "express";
import Order from "../../models/orderSchema";


export default class OrderController{
    private static instance: OrderController;
    private constructor() { }
    public static getInstance(): OrderController {
        if (!OrderController.instance) {
            OrderController.instance = new OrderController();
        }

        return OrderController.instance;
    }
    public async GetAll(_: Request, res: Response) {
        const orders = await Order.find({})
            .populate("cart")
            .populate("user")
        return res.json(orders)
    }
    public async GetById(req: Request, res: Response) {
        const order = await Order.findById(req.params.Id)
            .populate("cart")
            .populate("user")
        return res.json(order);
    }

    public async Add(req: Request, res: Response) {
        const order = await Order.create(req.body);
        if (order) {
            res.status(200).json({ message: "Add success" })
        } else {
            res.status(404).json({ message: "Error" })
        }
        return;
    }

    public async Delete(req: Request, res: Response) {
        const order = await Order.findByIdAndDelete(req.params.id)
        if (order) {
            res.status(200).json({ message: "Delete success" })
        } else {
            res.status(404).json({ message: "order not found" })
        }
        return;
    }
}