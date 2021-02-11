import { createStore, applyMiddleware, compose } from "redux";
import thumk from "redux-thunk";
import rootReducer from "./reducers/rootreducer";
import { createWrapper } from "next-redux-wrapper";
const middleware = [thumk];
const makeStore = () =>
  createStore(rootReducer, compose(applyMiddleware(...middleware)));
export const wrapper = createWrapper(makeStore);
