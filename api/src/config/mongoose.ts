import mongoose from "mongoose";
import { Product } from "../models/product/product";
import products from "./init-products";
export class Connect {
  public async init(): Promise<void> {

    try {
      await mongoose.connect("mongodb://localhost:27018/db-vending");
      console.log("MongoDB Connection succesfully");
      await this.insertProducts();
    } catch (error) {
      console.error("MongoDB Connection error");
      process.exit(1);
    }
  }

  private async insertProducts(): Promise<void> {
    await mongoose.connection.db.dropCollection("products");
    for (const product of products) {
      Product.create(product);
    }
  }
}
