export class UtilsResponse {

  public static responseOK(data: any, message?: string): any {
    return {
      code: 0,
      message: message ? message : "Successful",
      data,
    };
  }

  public static responseKO(error?: any): any {
    return {
      code: -1,
      message: error ? error : "There was a problem",
    };
  }

  public static responseKOToken(error?: any): any {
    return {
      code: -500,
      message: error ? error : "Token invalid",
    };
  }
}

