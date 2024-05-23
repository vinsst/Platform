import counterReducer from "./counter";
import counterLinesReducer from "./counterLines";
import { combineReducers } from "redux";
import showingNavReducer from "./showingNav";
import counterSepInputsReducer from "./counterSepInputs";
import uploadedPhotosReducer from "./uploadedPhotos";

const allReducers = combineReducers({
  counterReducer,
  showingNavReducer,
  counterLinesReducer,
  counterSepInputsReducer,
  uploadedPhotosReducer,
});

export default allReducers;
