import express, { json, urlencoded } from "express";
import cors from "cors";
import { MongooseDataBase } from "./config/mongoose";
// Routes
import productRouters from "./routes/products";
import shoppingCart from "./routes/shoppingCart";
import { IInitRoutes } from "./routes/init-routes.interface";

const PORT_TO_CONNECT: number = 3002; // default port to listen

export class Main {
  private db: MongooseDataBase;
  private app: express.Application;

  constructor() {
    this.db = MongooseDataBase.getInstance();
    this.db.connect();
    this.app = express();
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: false }));
  }

  private initRoutes(routes:IInitRoutes[]):void{
    //   for(const route:IInitRoutes of routes){
    //       this.app.use(route.path,route.controller);

    //   }
this.app.use();
  }

  public initApp(): void {

  }
}

// set Routes
app.use("/products", productRouters);
app.use("/cart", shoppingCart);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// start the Express serverƒ
app.listen(PORT_TO_CONNECT, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
