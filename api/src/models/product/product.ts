import { Schema, model, Model } from "mongoose";
import { IProduct } from "./product.interface";

const _ProductSchema: Schema<IProduct> = new Schema<IProduct>({
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
  img: {
    type: String,
    trim: true,
    default: "no_image.png",
    required: false,
  },
  name: {
    type: String,
    trim: true,
    required: [true, "Name is required"],
  },
  datecreated: {
    type: Date,
    default: Date.now,
  },
});

_ProductSchema.virtual("imgpath").get(function (this: any) {
  return `../assets/img/${this.img}`;
});

const _Product: Model<IProduct> = model<IProduct>("Product", _ProductSchema);

export const Product: Model<IProduct> = _Product;
export const ProductSchema: Schema<IProduct> = _ProductSchema;
