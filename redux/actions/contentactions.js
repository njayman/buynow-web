import { SET_PRODUCTS } from "../types";

export const setAllProducts = (products) => (dispatch) => {
  dispatch({
    type: SET_PRODUCTS,
    payload: products,
  });
};
