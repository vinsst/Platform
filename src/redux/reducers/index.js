import counterReducer from "./counter";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counterReducer,
});

export default allReducers;
