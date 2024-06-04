const separatePricesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_SEPARATE_PRICE":
      return [...state, { value: action.payload, text: "" }];
    case "DELETE_SEPARATE_PRICE":
      return state.filter((price, idx) => idx !== action.payload);
    case "SET_SEPARATE_PRICE_TEXT":
      return state.map((price, idx) =>
        idx === action.payload.index
          ? { ...price, text: action.payload.text }
          : price
      );
    case "CLEAR_SEPARATE_PRICES":
      return [];
    default:
      return state;
  }
};

export default separatePricesReducer;
