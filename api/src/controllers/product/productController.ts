import express from "express";
import { Product } from "../../models/product/product";
import { UtilsResponse } from "../../utils/utils-response";
import { BaseProductContoller } from "./base-product-controller";

export class ProductController extends BaseProductContoller {
    constructor() {
        super(Product);
    }

    public async getById(
        req: express.Request,
        res: express.Response
    ): Promise<void> {
        try {
            const product = await this.entityModel.findById(req.params.id);
            if (!product) {
                res.status(404).json(UtilsResponse.responseKO(`Product no exists by id: ${req.params.id}`));
                return;
            }
            const resp = UtilsResponse.responseOK(product);
            res.send(resp);
            return;
        } catch (error) {
            console.error(error);
            res.status(500).send(UtilsResponse.responseKO());
            return;
        }
    }

    public async getAll(
        req: express.Request,
        res: express.Response
    ): Promise<void> {
        try {
            const product = await this.entityModel.find({});
            if (!product) {
                res.status(404).json(UtilsResponse.responseKO("No exists products"));
                return;
            }
            const resp = UtilsResponse.responseOK(product);
            res.send(resp);
            return;
        } catch (error) {
            console.error(error);
            res.status(500).send(UtilsResponse.responseKO());
            return;
        }
    }
}
