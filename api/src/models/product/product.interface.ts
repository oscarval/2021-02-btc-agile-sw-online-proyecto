export interface IProduct {
    name: string;
    quantity: number;
    price: number;
    datecreated: (Date | number);
    img: string;
    _id?: string;
}