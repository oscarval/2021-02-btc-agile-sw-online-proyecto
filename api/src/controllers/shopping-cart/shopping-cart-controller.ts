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
    try {
      const userid: string = req.params.userid;
      const cart: any = await this.entityModel.findOne({ userid });
      if (!cart) {
        res.status(404).json(UtilsResponse.responseKO("No exists cart data"));
        return;
      }
      res.send(UtilsResponse.responseOK(cart));
      return;
    } catch (error) {
      console.error(error);
      res.status(500).send(UtilsResponse.responseKO());
      return;
    }
  }


}
