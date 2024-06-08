import counterReducer from "./counter";
import counterLinesReducer from "./counterLines";
import { combineReducers } from "redux";
import showingNavReducer from "./showingNav";
import uploadedPhotosReducer from "./uploadedPhotos";
import uploadedVideosReducer from "./uploadedVideos";
import nameDescriptionServiceReducer from "./nameDescriptionService";
import samePriceReducer from "./samePrice";
import separatePricesReducer from "./separatePrices";
import supplierStaticReducer from "./supplierStatic";
import supplierPlusReducer from "./supplierPlus";
import radioReducer from "./radioPrice";

const allReducers = combineReducers({
  counterReducer,
  showingNavReducer,
  counterLinesReducer,
  uploadedPhotosReducer,
  uploadedVideosReducer,
  nameDescriptionServiceReducer,
  samePriceReducer,
  separate: separatePricesReducer,
  supplierStaticReducer,
  supplier: supplierPlusReducer,
  radioReducer,
});

export default allReducers;
