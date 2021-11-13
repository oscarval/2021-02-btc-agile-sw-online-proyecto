import axios from "axios";
import { Dispatch } from "redux";
import Config from "../config/config";
import { ApiRequest, TIMEOUT } from "./base-api-request";
import { IHeader } from "./header.interface";

export class ProductApiRequest extends ApiRequest {
  constructor() {
    super();
    const header: IHeader = { key: "Content-Type", value: "application/json" };
    this.setHeader(header);
  }

  public GetAll(): any {
    return async (dispatch: Dispatch): Promise<void> => {
      this.setLoading(dispatch);
      try {
        const apiResponse = await axios
          .get(`${Config.ApiRequest.request.baseURL}/products`, this.options)
          .then((res) => res.data);
        setTimeout(() => {
          dispatch({
            type: Config.ApiRequest.actionsTypes.GET_ALL_PRODUCTS,
            payload: {
              response: apiResponse,
            },
          });
        }, TIMEOUT);
      } catch (err) {
        dispatch({
          type: Config.ApiRequest.actionsTypes.GET_ALL_PRODUCTS,
          payload: { response: err },
        });
      }
    };
  }
}
