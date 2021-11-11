import { IResponse } from "./response.interface";

export class UtilsResponse {
  public static responseOK(data: any, message?: string): IResponse {
    return {
      code: 0,
      data,
      message: message ? message : "Successful",
    };
  }

  public static responseKO(error?: any): IResponse {
    return {
      code: -1,
      data: null,
      message: error ? error : "There was a problem",
    };
  }
}
