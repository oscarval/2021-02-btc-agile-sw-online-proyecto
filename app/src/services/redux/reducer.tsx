import Config from "../config/config";
const initialErrorsState: any[] = [];

export interface Action {
  type: any;
  payload: any;
}
const reducer = (state: any = initialErrorsState, action: Action) => {
  switch (action.type) {
    case Config.ApiRequest.actionsTypes.UPDATE_CART:
      return {
        ...state,
        Cart: action.payload.response,
        loading:
          action.payload.response || action.payload.response === -1
            ? false
            : true,
      };
    case Config.ApiRequest.actionsTypes.GET_ALL_CART:
      return {
        ...state,
        Cart: action.payload.response,
        loading:
          action.payload.response || action.payload.response === -1
            ? false
            : true,
      };
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
    case Config.ApiRequest.actionsTypes.RESET:
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
