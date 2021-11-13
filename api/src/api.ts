import express, { json, urlencoded } from "express";
import cors from "cors";
import { MongooseDataBase } from "./config/mongoose";
// Routes
import { ProductRouter } from "./routes/products";
import { IInitRoutes } from "./routes/init-routes.interface";
import { ShoppingCartRouter } from "./routes/shoppingCart";

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

  public initRoutes(routes: IInitRoutes[]): void {
    for (const route of routes) {
      route.customRoute.setRoutes();
      this.app.use(route.path, route.customRoute.getRouter());
    }
    this.app.get("/", (req: express.Request, res: express.Response) => {
      res.send("Wellcome to API Showcase");
    });
  }

  public initApp(): void {
    this.app.listen(PORT_TO_CONNECT, () => {
      console.log(`server started at http://localhost:${PORT_TO_CONNECT}`);
    });
  }
}

const mainApp = new Main();
const routeList: IInitRoutes[] = [
  { customRoute: new ProductRouter(), path: '/products' },
  { customRoute: new ShoppingCartRouter(), path: '/cart' }
]
mainApp.initRoutes(routeList);
mainApp.initApp();