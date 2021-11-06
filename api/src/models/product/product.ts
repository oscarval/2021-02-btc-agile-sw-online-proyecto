import { Schema, model } from "mongoose";
import { IProduct } from "./product.interface";

const _ProductSchema: any = new Schema<IProduct>({
  name: {
    type: String,
    trim: true,
    required: [true, "Name is required"],
  },
  quantity: {
    type: Number,
    default: 0,
    required: false,
  },
  price: {
    type: Number,
    default: 0,
    required: false,
  },
  datecreated: {
    type: Date,
    default: Date.now,
  },
  img: {
    type: String,
    trim: true,
    default: "no_image.png",
    required: false,
  },
});

_ProductSchema.virtual("imgpath").get(function (this: any) {
  return `../assets/img/${this.img}`;
});

const _Product = model<IProduct>('Product', _ProductSchema);

export const Product = _Product;
export const ProductSchema = _ProductSchema;
