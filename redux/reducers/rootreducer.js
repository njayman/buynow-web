import { combineReducers } from "redux";
import authreducers from "./authreducers";
import cartreducer from "./cartreducer";

const rootReducer = combineReducers({
  auth: authreducers,
  cart: cartreducer,
});

export default rootReducer;
