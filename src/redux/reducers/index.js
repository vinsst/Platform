import counterReducer from "./counter";
import { combineReducers } from "redux";
import showingNavReducer from "./showingNav";

const allReducers = combineReducers({
  counterReducer,
  showingNavReducer,
});

export default allReducers;
