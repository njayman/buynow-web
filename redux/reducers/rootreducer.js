import { combineReducers } from "redux";
import authreducers from "./authreducers";
import cartreducer from "./cartreducer";
import contentreducer from "./contentreducer";
const rootReducer = combineReducers({
  auth: authreducers,
  cart: cartreducer,
  content: contentreducer,
});

export default rootReducer;
