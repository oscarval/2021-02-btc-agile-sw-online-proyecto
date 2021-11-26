import express from "express";
import { Model } from "mongoose";
import { IController } from "./controller.interface";

export abstract class Controller implements IController {
  public entityModel: Model<any>;

  constructor(entityModel: Model<any>) {
    this.entityModel = entityModel;
  }
  public abstract update(req: express.Request, res: express.Response): Promise<void>;
}
