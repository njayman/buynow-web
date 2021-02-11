import { SET_CURRENT_USER } from "../types";
const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
};

const authreducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authreducer;
