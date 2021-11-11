import { Router } from "express";
const productRouters = Router();
import { ProductController } from "../controllers/productController";

const productController: ProductController = new ProductController();

productRouters.get("/", productController.getAll);

productRouters.get("/:id", productController.getById);

productRouters.put("/:id", productController.update);

export default productRouters;
