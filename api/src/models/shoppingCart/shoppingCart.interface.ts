import { IProduct } from "../product/product.interface";

export interface IShoppingCart {
    userid: string;
    products: IProduct[];
    datecreated: (Date | number);
}