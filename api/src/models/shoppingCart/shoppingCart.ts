import { Schema, model, Model } from "mongoose";
import { ProductSchema } from "../product/product";
import { IShoppingCart } from "./shoppingCart.interface";

const opts = { toJSON: { virtuals: true } };
const _ShoppingCartSchema: any = new Schema<IShoppingCart>({
  userid: {
    type: String,
  },
  products: {
    type: [ProductSchema],
  },
  datecreated: {
    type: Date,
    default: Date.now,
  },
}, opts);

_ShoppingCartSchema.virtual("total").get(function (this: any) {
  const _total = this.products.reduce(
    (total: any, product: any) => (total += product.price * product.quantity),
    0
  );
  return _total;
});

const _ShoppingCart: Model<IShoppingCart> = model<IShoppingCart>('ShoppingCart', _ShoppingCartSchema);

export const ShoppingCart: Model<IShoppingCart> = _ShoppingCart;