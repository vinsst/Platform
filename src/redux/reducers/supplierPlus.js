const initialState = {
  contacts: [],
};

const supplierPlusReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SUPPLIER_PLUS_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "UPDATE_SUPPLIER_PLUS_CONTACT":
      const updatedContacts = state.contacts.map((contact, index) => {
        if (index === action.payload.index) {
          return action.payload.contact;
        }
        return contact;
      });
      return {
        ...state,
        contacts: updatedContacts,
      };
    default:
      return state;
  }
};

export default supplierPlusReducer;
