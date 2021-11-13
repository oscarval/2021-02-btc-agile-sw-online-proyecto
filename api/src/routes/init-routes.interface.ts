import { Controller } from "../controllers/controller";
import { CustomRoute } from "./custom-route";

export interface IInitRoutes {
  customRoute: CustomRoute;
  path: string;
}
