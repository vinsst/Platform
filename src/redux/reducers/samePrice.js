const samePriceReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_SAME_PRICE":
      return action.payload;
    case "CLEAR_SAME_PRICE":
      return "";
    default:
      return state;
  }
};

export default samePriceReducer;
