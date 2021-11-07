import { Schema, model } from "mongoose";
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
  const total = this.products.reduce(
    (total: any, product: any) => (total += product.price * product.quantity),
    0
  );
  return total;
});

const _ShoppingCart = model<IShoppingCart>('ShoppingCart', _ShoppingCartSchema);

export const ShoppingCart = _ShoppingCart;
