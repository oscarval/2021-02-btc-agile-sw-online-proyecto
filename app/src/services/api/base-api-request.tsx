import { AxiosRequestHeaders } from "axios";
import Config from "../config/config";
import { IHeader } from "./header.interface";

export const TIMEOUT: number = 500;

export abstract class ApiRequest {
  protected options: AxiosRequestHeaders = {};

  protected setHeader(header: IHeader): void {
    this.options[header.key] = header.value;
  }

  protected setLoading(dispatch: any) {
    dispatch({
      type: Config.ApiRequest.actionsTypes.LOADING,
      payload: null,
    });
  }

  protected async clearAction(action: any, dispatch: any): Promise<void> {
    await dispatch({
      type: action,
      payload: {
        response: -1,
      },
    });
  }
}
