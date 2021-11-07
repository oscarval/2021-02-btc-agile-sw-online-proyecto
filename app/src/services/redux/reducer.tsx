import Config from "../config/config";
const initialErrorsState: any[] = [];

export interface Action {
  type: any;
  payload: any;
}
const reducer = (state: any = initialErrorsState, action: Action) => {
  switch (action.type) {
    // case Config.ApiRequest.actionsTypes.UPDATE_CART:
    //   return {
    //     ...state,
    //     Cart: payload.response,
    //     loading: payload.response || payload.response === -1 ? false : true,
    //   };
    // case Config.ApiRequest.actionsTypes.GET_ALL_CART:
    //   return {
    //     ...state,
    //     Cart: payload.response,
    //     loading: payload.response || payload.response === -1 ? false : true,
    //   };

    // case Config.ApiRequest.actionsTypes.REGISTER:
    //   return {
    //     ...state,
    //     Register: payload.response,
    //     loading: payload.response || payload.response === -1 ? false : true,
    //   };
    // case Config.ApiRequest.actionsTypes.LOGIN:
    //   return {
    //     ...state,
    //     Login: payload.response,
    //     loading: payload.response || payload.response === -1 ? false : true,
    //   };
    // case Config.ApiRequest.actionsTypes.SET_TOKEN:
    //   return {
    //     ...state,
    //     token: payload.token,
    //     tokenDate: new Date().getTime() / 1000,
    //   };
    case Config.ApiRequest.actionsTypes.GET_ALL_PRODUCTS:
      return {
        ...state,
        Products: action.payload.response,
        loading:
          action.payload.response || action.payload.response === -1
            ? false
            : true,
      };
    case Config.ApiRequest.actionsTypes.LOADING:
      return {
        ...state,
        loading: true,
      };
    // case Config.ApiRequest.actionsTypes.LOGOUT:
    //   return {
    //     ...state,
    //     Logout: payload.response,
    //     loading: payload.response || payload.response === -1 ? false : true,
    //   };
    case Config.ApiRequest.actionsTypes.RESET:
      return {
        loading: false,
        token: null,
        tokenDate: 0,
      };
    default:
      return state;
  }
};

export default reducer;
