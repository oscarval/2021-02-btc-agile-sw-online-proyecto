import mongoose from "mongoose";
import request from "supertest";
import { MainApp } from "../src/api";
import { IProduct } from "../src/models/product/product.interface";


let appExpress: Express.Application;

let allProducts: IProduct[] = [];

beforeAll(async () => {
  appExpress = MainApp.getApp();
  const connectDB: boolean = await MainApp.connectBD('localhost', '27018', 'db-vending');

  let db = mongoose.connection;

  db.on('error', (err) => {
    expect(connectDB).toBe(false);
  });

  db.once('open', () => {
    expect(connectDB).toBe(true);
  });
});

test('first test', () => {
  expect(true).toBe(true);
})

describe("GET /products", () => {
  test("should list all products", async () => {
    await request(appExpress)
      .get("/products")
      .expect(200)
      .expect((res) => {
        const body = res.body;
        allProducts = body.data;
        expect(body.data.length > 0).toBe(true);
      });
  });
});

describe("GET /products by id", () => {
  test("should list product by id: ", async () => {
    const id: string | undefined = allProducts[0]._id;
    await request(appExpress)
      .get(`/products/${id}`)
      .expect(200)
      .expect((res) => {
        const body = res.body;
        expect(body.code === 0 && body.data._id === id).toBe(true);
      });
  });

  test("Product not found", async () => {
    const id: string = "111111111111111111111111";

    const errorMessage = `Product no exists by id: ${id}`;

    await request(appExpress)
      .get(`/products/${id}`)
      .expect(404)
      .expect((res) => {
        const body = res.body;
        expect(body.message).toEqual(errorMessage);
      });
  });
});


describe("PUT /products/update", () => {
  test("should update product", async () => {
    const id: string | undefined = allProducts[0]._id;
    allProducts[0].quantity = 0;
    const data = allProducts[0];
    await request(appExpress)
      .put(`/products/update`)
      .send(data)
      .expect(200)
      .expect((res) => {
        const body = res.body;
        expect(body.data.quantity).toEqual(data.quantity);
      });
  });
  test("should update product not found", async () => {
    const id = "111111111111111111111111";

    allProducts[0]._id = id;
    const data = allProducts[0];
    const updateMessage = "Error update product";

    await request(appExpress)
      .put(`/products/update`)
      .send(data)
      .expect(404)
      .expect((res) => {
        const body = res.body;
        expect(body.message).toEqual(updateMessage);
      });
  });
});


afterAll(() => {
  return mongoose.disconnect();
});