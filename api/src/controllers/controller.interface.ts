import express from "express";

export interface IController {
    update(req: express.Request, res: express.Response): Promise<void>;
}