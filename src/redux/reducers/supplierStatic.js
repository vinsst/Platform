const initialState = {
  supplierName: "",
  supplierPhone: "",
  supplierEmail: "",
};

const supplierStaticReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SUPPLIER_NAME":
      return {
        ...state,
        supplierName: action.payload,
      };
    case "SET_SUPPLIER_PHONE":
      return {
        ...state,
        supplierPhone: action.payload,
      };
    case "SET_SUPPLIER_EMAIL":
      return {
        ...state,
        supplierEmail: action.payload,
      };
    default:
      return state;
  }
};

export default supplierStaticReducer;
