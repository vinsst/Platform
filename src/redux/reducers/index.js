import { combineReducers } from "redux";
import counterReducer from "./counter";
import counterLinesReducer from "./counterLines";
import counterLinesCalendarReducer from "./counterLinesCalendar";
import showingNavReducer from "./showingNav";
import uploadedPhotosReducer from "./uploadedPhotos";
import uploadedVideosReducer from "./uploadedVideos";
import nameDescriptionServiceReducer from "./nameDescriptionService";
import samePriceReducer from "./samePrice";
import separatePricesReducer from "./separatePrices";
import supplierStaticReducer from "./supplierStatic";
import supplierPlusReducer from "./supplierPlus";
import radioReducer from "./radioPrice";

// Grouping related reducers under the 'services' key
const servicesReducers = combineReducers({
  uploadedPhotosReducer,
  uploadedVideosReducer,
  nameDescriptionServiceReducer,
  samePriceReducer,
  separate: separatePricesReducer,
  supplierStaticReducer,
  supplier: supplierPlusReducer,
  counterReducer,
  counterLinesReducer,
  radioReducer,
});

const calendarReducers = combineReducers({
  counterLinesCalendarReducer,
});

const allReducers = combineReducers({
  showingNavReducer,
  calendar: calendarReducers,
  services: servicesReducers,
});

export default allReducers;
