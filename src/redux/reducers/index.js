import counterReducer from "./counter";
import counterLinesReducer from "./counterLines";
import { combineReducers } from "redux";
import showingNavReducer from "./showingNav";
import counterSepInputsReducer from "./counterSepInputs";
import uploadedPhotosReducer from "./uploadedPhotos";
import uploadedVideosReducer from "./uploadedVideos";
import nameDescriptionServiceReducer from "./nameDescriptionService";
import samePriceReducer from "./samePrice";
import separatePricesReducer from "./separatePrices";
import supplierStaticReducer from "./supplierStatic";
import supplierPlusReducer from "./supplierPlus";

const allReducers = combineReducers({
  counterReducer,
  showingNavReducer,
  counterLinesReducer,
  counterSepInputsReducer,
  uploadedPhotosReducer,
  uploadedVideosReducer,
  nameDescriptionServiceReducer,
  samePriceReducer,
  separatePricesReducer,
  supplierStaticReducer,
  supplier: supplierPlusReducer,
});

export default allReducers;
