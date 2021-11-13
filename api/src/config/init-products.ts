import { Product } from "../models/product/product";

const products: InstanceType<typeof Product>[] = [
  new Product({
    quantity: 1,
    price: 2.1,
    img: "sandia.png",
    name: "Sandia",
    datecreated: "2020-10-24T18:33:05.167Z",
  }),
  new Product({
    quantity: 1,
    price: 2.1,
    img: "mango.png",
    name: "Mango",
    datecreated: "2020-10-24T18:33:05.168Z",
  }),
  new Product({
    quantity: 3,
    price: 2.1,
    img: "cereza.png",
    name: "Cerezas",
    datecreated: "2020-10-24T18:33:05.168Z",
  }),
  new Product({
    quantity: 6,
    price: 2.5,
    img: "pina.png",
    name: "Piña",
    datecreated: "2020-10-24T18:33:05.168Z",
  }),
  new Product({
    quantity: 30,
    price: 2.2,
    img: "naranja.png",
    name: "Naranja",
    datecreated: "2020-10-24T18:33:05.168Z",
  }),
  new Product({
    quantity: 3,
    price: 2.2,
    img: "platano.png",
    name: "Plátano",
    datecreated: "2020-10-24T18:33:05.168Z",
  }),
  new Product({
    quantity: 2,
    price: 1.8,
    img: "melocoton.png",
    name: "Melocotón",
    datecreated: "2020-10-24T18:33:05.168Z",
  }),
  new Product({
    quantity: 3,
    price: 1.2,
    img: "manzana.png",
    name: "Manzana",
    datecreated: "2020-10-24T18:33:05.168Z",
  }),
  new Product({
    quantity: 5,
    price: 1.2,
    img: "uva.png",
    name: "Uvas",
    datecreated: "2020-10-24T18:33:05.168Z",
  }),
  new Product({
    quantity: 1,
    price: 3.4,
    img: "limon.png",
    name: "Limón",
    datecreated: "2020-10-24T18:33:05.168Z",
  }),
  new Product({
    quantity: 1,
    price: 3.1,
    img: "kiwi.png",
    name: "Kiwi",
    datecreated: "2020-10-24T18:33:05.169Z",
  }),
  new Product({
    quantity: 3,
    price: 1,
    img: "fresa.png",
    name: "Fresa",
    datecreated: "2020-10-24T18:33:05.169Z",
  }),
  new Product({
    quantity: 3,
    price: 1.3,
    img: "berenjena.png",
    name: "Berenjena",
    datecreated: "2020-10-24T18:33:05.169Z",
  }),
  new Product({
    quantity: 4,
    price: 5.99,
    img: "aguacate.png",
    name: "Aguacate",
    datecreated: "2020-10-24T18:33:05.169Z",
  }),
  new Product({
    quantity: 5,
    price: 1.8,
    img: "tomate.png",
    name: "Tomate",
    datecreated: "2020-10-24T18:33:05.169Z",
  }),
  new Product({
    quantity: 6,
    price: 1.55,
    img: "brocoli.png",
    name: "Brócoli",
    datecreated: "2020-10-24T18:33:05.169Z",
  }),
];

export default products;
