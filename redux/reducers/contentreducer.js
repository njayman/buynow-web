import { SET_PRODUCTS } from "../types";

const initialState = {
  products: [],
};

const contentreducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default contentreducer;
