

import { Product } from "../models/product/product";
import { UtilsResponse } from "../utils/utils-response";

export class ProductController {

  public async getById(req: any, res: any): Promise<void> {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        res.status(204);
        res.send(
          UtilsResponse.responseKO(`Product no exists by id: ${req.paramas.id}`)
        );
      }
      const resp = UtilsResponse.responseOK(product);
      res.send(resp);
    } catch (error) {
      console.error(error);
      res.status(500).send(UtilsResponse.responseKO());
    }
  }

  public async getAll(req: any, res: any): Promise<void> {
    try {
      const product = await Product.find({});
      if (!product) {
        res.status(204);
        res.send(
          UtilsResponse.responseKO(`No exists products to: ${req.params.query}`)
        );
      }
      const resp = UtilsResponse.responseOK(product);
      res.send(resp);
    } catch (error) {
      console.error(error);
      res.status(500).send(UtilsResponse.responseKO());
    }
  }

  public async updateProduct(req: any, res: any): Promise<void> {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!product) {
        res.status(500);
        res.send(UtilsResponse.responseKO("Error to update product"));
      }
      const resp = UtilsResponse.responseOK(product);
      res.send(resp);
    } catch (error) {
      console.error(error);
      res.status(500).send(UtilsResponse.responseKO());
    }
  }
}
