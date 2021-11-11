import express from "express";

export abstract class Controller {
  public abstract update(
    req: express.Request,
    res: express.Response
  ): Promise<void>;
}
