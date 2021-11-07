import axios from "axios";
import Config from "../config/config";

const TIMEOUT = 500;
/**
 * ApiRequest Services
 * Users functionality
 * Products funtionality
 */
const ApiRequest = {
  options: {
    headers: {
      "Content-Type": "application/json",
    },
  },
  Clear: (action: any) => {
    return async (dispatch: any) => {
      clearAction(action, dispatch);
    };
  },
  Products: {
    GetAll: () => {
      return async (dispatch: any) => {
        setLoading(dispatch);
        try {
          const apiResponse = await axios
            .get(
              `${Config.ApiRequest.request.baseURL}/products`,
              ApiRequest.options
            )
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
    },
  },
  Cart: {
    GetAll: () => {
      return async (dispatch: any) => {
        setLoading(dispatch);
        try {
          const apiResponse = await axios
            .get(
              `${Config.ApiRequest.request.baseURL}/cart`,
              ApiRequest.options
            )
            .then((res) => res.data);
          setTimeout(() => {
            dispatch({
              type: Config.ApiRequest.actionsTypes.GET_ALL_CART,
              payload: {
                response: apiResponse,
              },
            });
          }, TIMEOUT);
        } catch (err) {
          dispatch({
            type: Config.ApiRequest.actionsTypes.GET_ALL_CART,
            payload: { response: err },
          });
        }
      };
    },
    UpdateCart: (cartData: any) => {
      return async (dispatch: any) => {
        setLoading(dispatch);
        try {
          const apiResponse = await axios
            .put(
              `${Config.ApiRequest.request.baseURL}/cart/update`,
              cartData,
              ApiRequest.options
            )
            .then((res) => res.data);
          setTimeout(() => {
            dispatch({
              type: Config.ApiRequest.actionsTypes.UPDATE_CART,
              payload: {
                response: apiResponse,
              },
            });
          }, TIMEOUT);
        } catch (err) {
          dispatch({
            type: Config.ApiRequest.actionsTypes.UPDATE_CART,
            payload: { response: err },
          });
        }
      };
    },
  },
};

const setLoading = (dispatch: any) => {
  dispatch({
    type: Config.ApiRequest.actionsTypes.LOADING,
    payload: null,
  });
};

const clearAction = (action: any, dispatch: any) => {
  dispatch({
    type: action,
    payload: {
      response: -1,
    },
  });
};

export default ApiRequest;
