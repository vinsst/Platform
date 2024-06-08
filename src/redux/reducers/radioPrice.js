const initialState = {
  selectedRadio: "1",
};

const radioReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_RADIO":
      return {
        ...state,
        selectedRadio: action.payload,
      };
    default:
      return state;
  }
};

export default radioReducer;
