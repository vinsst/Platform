import counterReducer from "./counter";
import counterLinesReducer from "./counterLines";
import { combineReducers } from "redux";
import showingNavReducer from "./showingNav";
import counterSepInputsReducer from "./counterSepInputs";

const allReducers = combineReducers({
  counterReducer,
  showingNavReducer,
  counterLinesReducer,
  counterSepInputsReducer,
});

export default allReducers;
