import { createStore } from "redux";
import appReducer from "../reducers";

const defaultState = {};

const store = createStore(appReducer, defaultState);

export default store;
