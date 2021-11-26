import express from "express";
import { ShoppingCartController } from "../controllers/shopping-cart/shopping-cart-controller";
import { CustomRoute } from "./custom-route";
export class ShoppingCartRouter extends CustomRoute {
    constructor() {
        const shoppingCartController: ShoppingCartController = new ShoppingCartController();
        super(shoppingCartController);
    }

    public setRoutes(): void {
        const controller: ShoppingCartController = this.controller as ShoppingCartController;
        this.router.get("/:userid", (req: express.Request, resp: express.Response) => controller.getAllProductsCart(req, resp));
        this.router.put("/update", (req: express.Request, resp: express.Response) => controller.update(req, resp));
    }
}