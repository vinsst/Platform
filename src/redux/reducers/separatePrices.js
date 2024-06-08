const initialState = {
  pricetxtMassive: [],
};

const separatePricesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEPARATE_PRICE_TEXT":
      return {
        ...state,
        pricetxtMassive: [...state.pricetxtMassive, action.payload],
      };
    case "UPDATE_SEPARATE_PRICE_TEXT":
      const updatedPricetxtMassive = state.pricetxtMassive.map(
        (pricetxt, index) => {
          if (index === action.payload.index) {
            return action.payload.pricetxt;
          }
          return pricetxt;
        }
      );
      return {
        ...state,
        pricetxtMassive: updatedPricetxtMassive,
      };
    case "DELETE_SEPARATE_PRICE_TEXT":
      return {
        ...state,
        pricetxtMassive: state.pricetxtMassive.filter(
          (_, index) => index !== action.payload
        ),
      };
    case "CLEAR_SEPARATE_PRICE_TEXT":
      return {
        ...state,
        pricetxtMassive: [],
      };
    default:
      return state;
  }
};

export default separatePricesReducer;
