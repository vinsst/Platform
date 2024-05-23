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

export const incrementSepInputs = () => {
  return {
    type: "INCREMENT-SEPINPUTS",
  };
};

export const decrementSepInputs = (index) => ({
  type: "DECREMENT-SEPINPUTS",
  payload: index,
});

export const addUploadedPhoto = (photo) => ({
  type: "ADD_UPLOADED_PHOTO",
  payload: photo,
});

export const deletingUploadedPhoto = (index) => ({
  type: "DELETE_UPLOADED_PHOTO",
  payload: index,
});
