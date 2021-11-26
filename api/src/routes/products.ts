import express from "express";
import { ProductController } from "../controllers/product/productController";
import { CustomRoute } from "./custom-route";

export class ProductRouter extends CustomRoute {
    constructor() {
        const productController: ProductController = new ProductController();
        super(productController);
    }

    public setRoutes(): void {
        const controller: ProductController = this.controller as ProductController;
        this.router.get("/", (req: express.Request, resp: express.Response) => controller.getAll(req, resp));
        this.router.get("/:id", (req: express.Request, resp: express.Response) => controller.getById(req, resp));
        this.router.put("/update", (req: express.Request, resp: express.Response) => controller.update(req, resp));
    }
}