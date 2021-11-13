import mongoose from "mongoose";
import { Product } from "../models/product/product";
import products from "./init-products";
export class MongooseDataBase {
  private static instance: MongooseDataBase;

  public static getInstance(): MongooseDataBase {
    if (!this.instance) {
      this.instance = new MongooseDataBase();
    }
    return this.instance;
  }

  public async connect(): Promise<void> {
    try {
      await mongoose.connect("mongodb://mongo:27018/db-vending");
      console.log("MongoDB Connection succesfully");
      await this.insertProducts();
    } catch (error) {
      console.error("MongoDB Connection error", error);
    }
  }

  private async insertProducts(): Promise<void> {
    try {
      await this.dropCollection("products");
      for (const product of products) {
        Product.create(product);
      }
    } catch (error) {
      console.error("Erro MongoDB drop collection", error);
    }
  }

  public async dropCollection(collectionName: string): Promise<void> {
    const collections: string[] = (
      await mongoose.connection.db.listCollections().toArray()
    ).map((collection) => collection.name);
    if (collections.indexOf(collectionName) !== -1) {
      await mongoose.connection.db.dropCollection(collectionName);
    }
  }
}
