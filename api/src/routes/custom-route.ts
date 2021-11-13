import { Router } from "express";
import { Controller } from "../controllers/controller";

export abstract class CustomRoute {
    protected controller: Controller;
    protected router;

    constructor(controller: Controller) {
        this.controller = controller;
        this.router = Router();
    }
    public abstract setRoutes(): void;

    public getRouter(): Router {
        return this.router;
    }
}