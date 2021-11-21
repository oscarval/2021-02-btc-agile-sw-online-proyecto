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
    this.app = express();
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: false }));
  }

  public async connectBD(server: string, port: string, database: string): Promise<boolean> {
    const result: boolean = await this.db.connect(server, port, database);
    if(result){
      return result;
    }else{
      throw new Error('Error connect to database');
    }
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

  public getApp() {
    return this.app;
  }
}

const mainApp = new Main();
if (process.env.NODE_ENV !== "test") {
  mainApp.connectBD('localhost', '27018', 'db-vending');
}
const routeList: IInitRoutes[] = [
  { customRoute: new ProductRouter(), path: '/products' },
  { customRoute: new ShoppingCartRouter(), path: '/cart' }
]
mainApp.initRoutes(routeList);
if (process.env.NODE_ENV !== "test") {
  mainApp.initApp();
}

export const MainApp = mainApp;

