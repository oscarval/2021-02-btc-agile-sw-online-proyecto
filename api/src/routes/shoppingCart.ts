import { Router } from "express";
const shoppingCartRoutes = Router();
import { ShoppingCartController } from "../controllers/shoppingCartController";

const shoppingCartController: ShoppingCartController = new ShoppingCartController();

shoppingCartRoutes.get("/", shoppingCartController.getAllProductsCart);

shoppingCartRoutes.put("/update", shoppingCartController.updateCart);

export default shoppingCartRoutes;
