import express from "express";
import { Model } from "mongoose";
import { IShoppingCart } from "../models/shoppingCart/shoppingCart.interface";
import { ShoppingCart } from "../models/shoppingCart/shoppingCart";
import { UtilsResponse } from "../utils/utils-response";
import { Controller } from "./controller";

export class ShoppingCartController extends Controller {
  public async getAllProductsCart(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    const userid: string = req.params._id;
    const cart: any = await ShoppingCart.findOne({ userid });
    res.send(UtilsResponse.responseOK(cart));
  }

  public async update(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      const userid: string = req.params._id;
      let cart: any = await ShoppingCart.findOneAndUpdate(
        { userid },
        req.body,
        {
          new: true,
        }
      );
      if (!cart) {
        const cartNew: any = await ShoppingCart.create(req.body);
        cart = cartNew;
        if (!cartNew) {
          res.status(500).send(UtilsResponse.responseKO());
        }
      }
      res.send(UtilsResponse.responseOK(cart));
    } catch (error) {
      console.error(error);
      res.status(500).send(UtilsResponse.responseKO());
    }
  }
}
