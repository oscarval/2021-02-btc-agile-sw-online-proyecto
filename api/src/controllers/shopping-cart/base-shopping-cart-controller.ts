import express from "express";
import { Model } from "mongoose";
import { UtilsResponse } from "../../utils/utils-response";
import { IShoppingCart } from "../../models/shoppingCart/shoppingCart.interface";
import { Controller } from "../controller";

export abstract class BaseShoppingCartContoller extends Controller {
    constructor(entityModel: Model<IShoppingCart>) {
        super(entityModel);
    }

    public abstract getAllProductsCart(req: express.Request, res: express.Response): Promise<void>;

    public async update(
        req: express.Request,
        res: express.Response
    ): Promise<void> {
        try {
            const userid: string = req.body.userid;
            let responseEntity: any = await this.entityModel.findOneAndUpdate(
                { userid },
                req.body,
                {
                    new: true,
                }
            );
            if (!responseEntity) {
                const responseEntityNew: any = await this.entityModel.create(req.body);
                responseEntity = responseEntityNew;
                if (!responseEntityNew) {
                    res.status(500).send(UtilsResponse.responseKO());
                }
            }
            res.send(UtilsResponse.responseOK(responseEntity));
        } catch (error) {
            console.error(error);
            res.status(500).send(UtilsResponse.responseKO());
        }
    }
}