const initialState = {
  uploadedPhoto: [],
};

const uploadedPhotosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_UPLOADED_PHOTO":
      return {
        ...state,
        uploadedPhoto: [...state.uploadedPhoto, action.payload],
      };
    case "DELETE_UPLOADED_PHOTO":
      return {
        ...state,
        uploadedPhoto: state.uploadedPhoto.filter(
          (input, idx) => idx !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default uploadedPhotosReducer;
