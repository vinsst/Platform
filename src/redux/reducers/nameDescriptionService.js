const initialState = {
  serviceName: "",
  serviceDescription: "",
};

const nameDescriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SERVICE_NAME":
      return {
        ...state,
        serviceName: action.payload,
      };
    case "SET_SERVICE_DESCRIPTION":
      return {
        ...state,
        serviceDescription: action.payload,
      };
    default:
      return state;
  }
};

export default nameDescriptionReducer;
