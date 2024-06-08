export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const toggleNav = () => {
  return {
    type: "TOGGLE_NAV",
  };
};

export const incrementLines = () => {
  return {
    type: "INCREMENT-LINENUM",
  };
};

export const decrementLines = () => {
  return {
    type: "DECREMENT-LINENUM",
  };
};

export const deleteSepInputs = () => ({
  type: "DELETE-SEPINPUTS",
});

export const addUploadedPhoto = (photo) => ({
  type: "ADD_UPLOADED_PHOTO",
  payload: photo,
});

export const deletingUploadedPhoto = (index) => ({
  type: "DELETE_UPLOADED_PHOTO",
  payload: index,
});

export const addUploadedVideo = (video) => ({
  type: "ADD_UPLOADED_VIDEO",
  payload: video,
});

export const deletingUploadedVideo = (index) => ({
  type: "DELETE_UPLOADED_VIDEO",
  payload: index,
});

export const setServiceName = (name) => ({
  type: "SET_SERVICE_NAME",
  payload: name,
});

export const setServiceDescription = (description) => ({
  type: "SET_SERVICE_DESCRIPTION",
  payload: description,
});

export const setSamePrice = (price) => ({
  type: "SET_SAME_PRICE",
  payload: price,
});

export const clearSamePrice = () => ({
  type: "CLEAR_SAME_PRICE",
});

export const setSupplierName = (name) => ({
  type: "SET_SUPPLIER_NAME",
  payload: name,
});

export const setSupplierPhone = (phoneNum) => ({
  type: "SET_SUPPLIER_PHONE",
  payload: phoneNum,
});

export const setSupplierEmail = (email) => ({
  type: "SET_SUPPLIER_EMAIL",
  payload: email,
});

export const setSupplierPlusContact = (contact) => ({
  type: "SET_SUPPLIER_PLUS_CONTACT",
  payload: contact,
});

export const updateSupplierPlusContact = (index, contact) => ({
  type: "UPDATE_SUPPLIER_PLUS_CONTACT",
  payload: { index, contact },
});

export const setSeparatePriceText = (pricetxt) => ({
  type: "SET_SEPARATE_PRICE_TEXT",
  payload: pricetxt,
});

export const updateSeparatePriceText = (index, pricetxt) => ({
  type: "UPDATE_SEPARATE_PRICE_TEXT",
  payload: { index, pricetxt },
});

export const clearSeparatePriceText = () => ({
  type: "CLEAR_SEPARATE_PRICE_TEXT",
});

export const deleteSeparatePriceText = (index) => ({
  type: "DELETE_SEPARATE_PRICE_TEXT",
  payload: index,
});

export const setSelectedRadio = (value) => ({
  type: "SET_SELECTED_RADIO",
  payload: value,
});
