import { ShoppingCart } from "../models/shoppingCart/shoppingCart";
import { UtilsResponse } from "../utils/utils-response";

export class ShoppingCartController {
  public async getAllProductsCart(req: any, res: any): Promise<void> {
    const userid = req._id;
    const cart = await ShoppingCart.findOne({ userid });
    res.send(UtilsResponse.responseOK(cart));
  }

  public async updateCart(req: any, res: any): Promise<void> {
    try {
      const userid = req._id;
      let cart = await ShoppingCart.findOneAndUpdate(
        { userid },
        req.body,
        {
          new: true,
        }
      );
      if (!cart) {
        const cartNew = await ShoppingCart.create(req.body);
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
