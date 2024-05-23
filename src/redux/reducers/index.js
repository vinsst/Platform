import counterReducer from "./counter";
import counterLinesReducer from "./counterLines";
import { combineReducers } from "redux";
import showingNavReducer from "./showingNav";
import counterSepInputsReducer from "./counterSepInputs";
import uploadedPhotosReducer from "./uploadedPhotos";
import uploadedVideosReducer from "./uploadedVideos";

const allReducers = combineReducers({
  counterReducer,
  showingNavReducer,
  counterLinesReducer,
  counterSepInputsReducer,
  uploadedPhotosReducer,
  uploadedVideosReducer,
});

export default allReducers;
