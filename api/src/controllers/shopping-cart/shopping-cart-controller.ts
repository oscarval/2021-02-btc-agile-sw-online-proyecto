import express from "express";
import { ShoppingCart } from "../../models/shoppingCart/shoppingCart";
import { UtilsResponse } from "../../utils/utils-response";
import { BaseShoppingCartContoller } from "./base-shopping-cart-controller";

export class ShoppingCartController extends BaseShoppingCartContoller {
  constructor() {
    super(ShoppingCart);
  }

  public async getAllProductsCart(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    const userid: string = req.params._id;
    const cart: any = await this.entityModel.findOne({ userid });
    res.send(UtilsResponse.responseOK(cart));
  }


}
