import express from "express";
import { Model } from "mongoose";
import { UtilsResponse } from "../../utils/utils-response";
import { IProduct } from "../../models/product/product.interface";
import { Controller } from "../controller";

export abstract class BaseProductContoller extends Controller {
    constructor(entityModel: Model<IProduct>) {
        super(entityModel);
    }
    public abstract getById(req: express.Request, res: express.Response): Promise<void>;
    public abstract getAll(req: express.Request, res: express.Response): Promise<void>;

    public async update(
        req: express.Request,
        res: express.Response,
    ): Promise<void> {
        try {
            const responseEntity = await this.entityModel.findByIdAndUpdate(req.params._id, req.body, { new: true, });
            if (!responseEntity) {
                res.status(500);
                res.send(UtilsResponse.responseKO("Error to update"));
                return;
            }
            const resp = UtilsResponse.responseOK(responseEntity);
            res.send(resp);
        } catch (error) {
            console.error(error);
            res.status(500).send(UtilsResponse.responseKO());
        }
    }
}