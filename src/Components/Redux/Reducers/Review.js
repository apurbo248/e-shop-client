export const allReviewReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case "ALL_REVIEW_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ALL_REVIEW_SUCCESS":
      return {
        ...state,
        loading: false,

        reviews: action.payload.reviews,
      };

    case "ALL_REVIEW_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "CLEAR_ERROR":
      return { ...state, error: null };

    default:
      return state;
  }
};

export const deleteReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_REVIEW_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "DELETE_REVIEW_SUCCESS":
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case "DELETE_REVIEW_RESET":
      return {
        ...state,
        isDeleted: false,
      };
    case "DELETE_REVIEW_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "CLEAR_ERROR":
      return { ...state, error: null };

    default:
      return state;
  }
};
