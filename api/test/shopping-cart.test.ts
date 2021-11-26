import mongoose from "mongoose";
import request from "supertest";
import { MainApp } from "../src/api";
import { IShoppingCart } from "../src/models/shoppingCart/shoppingCart.interface";


let appExpress: Express.Application;

let shoppingCart: IShoppingCart;

const userid: string = "1000";

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

describe("PUT /cart/update create first cart register", () => {
  test("should create cart", async () => {
    shoppingCart = {
      userid: userid,
      datecreated: new Date(),
      products: []
    };
    const data = shoppingCart;
    await request(appExpress)
      .put(`/cart/update`)
      .send(data)
      .expect(200)
      .expect((res) => {
        const body = res.body;
        expect(body.data.products.length === 0).toBe(true);
      });
  });
});


describe("GET /cart/:id", () => {
  test("should list cart and their propduct by id", async () => {
    await request(appExpress)
      .get(`/cart/${userid}`)
      .expect(200)
      .expect((res) => {
        const body = res.body;
        shoppingCart = body.data;
        expect(body.code === 0 && body.data.userid === userid).toBe(true);
      });
  });

  test("cart not found by userid", async () => {
    const userid: string = "1001";
    const errorMessage = "No exists cart data";

    await request(appExpress)
      .get(`/cart/${userid}`)
      .expect(404)
      .expect((res) => {
        const body = res.body;
        expect(body.message).toEqual(errorMessage);
      });
  });
});

describe("PUT /cart/update", () => {
  test("should update product not found", async () => {
    const randomSufixID: string = Math.ceil(Math.random() * 100).toString();
    const randomUserid: string = Math.ceil(Math.random() * 1000).toString();
    const id = "1111111111111111111111" + randomSufixID;

    shoppingCart.products = [];
    shoppingCart._id = id;
    shoppingCart.userid = randomUserid;
    const data = shoppingCart;

    await request(appExpress)
      .put(`/cart/update`)
      .send(data)
      .expect(200)
      .expect((res) => {
        const body = res.body;
        expect(body.data.userid === randomUserid).toBe(true);
      });
  });
});


afterAll(() => {
  return mongoose.disconnect();
});