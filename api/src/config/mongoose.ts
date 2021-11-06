import mongoose, { connect, connection } from "mongoose";
import { Product } from "../models/product/product";
import products from "./init-products";
connect("mongodb://localhost:27018/db-vending", {}, async () => {
  // tslint:disable-next-line:no-console
  console.log("Connection to mongodb sucessfull");
  await insertProducts();
});

const insertProducts = async () => {
  await connection.db.dropCollection("products");
  for (const product of products) {
    Product.create(product);
  }
};

export default mongoose;
