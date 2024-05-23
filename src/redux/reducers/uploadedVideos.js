const initialState = {
  uploadedVideo: [],
};

const uploadedVideosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_UPLOADED_VIDEO":
      return {
        ...state,
        uploadedVideo: [...state.uploadedVideo, action.payload],
      };
    case "DELETE_UPLOADED_VIDEO":
      return {
        ...state,
        uploadedVideo: state.uploadedVideo.filter(
          (input, idx) => idx !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default uploadedVideosReducer;
