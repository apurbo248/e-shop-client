export const createOrderReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case "NEW_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "NEW_PRODUCT_SUCCESS":
      return {
        loading: false,
        success: action.payload.success,
        product: action.payload.product,
      };
    case "NEW_PRODUCT_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    case "NEW_PRODUCT_RESET":
      return {
        ...state,
        success: false,
      };
    case "CLEAR_ERROR":
      return { ...state, error: null };

    default:
      return state;
  }
};
export const getProductsReducer = (
  state = { products: []},
  action
) => {
  switch (action.type) {
    case "ALL_PRODUCT_REQUEST":
    case "ADMIN_ALL_PRODUCT_REQUEST":
      return {
        loading: true,
        products: [],

      };
    case "ALL_PRODUCT_SUCCESS":
    case "ADMIN_ALL_PRODUCT_SUCCESS":
      return {
        loading: false,
        products: action.payload.products,
        productCount: action.payload.productCount,
        productPerPage: action.payload.productPerPage,
        
      };

    case "ALL_PRODUCT_FAIL":
    case "ADMIN_ALL_PRODUCT_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    case "CLEAR_ERROR":
      return { ...state, error: null };

    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case "PRODUCT_DETAILS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "PRODUCT_DETAILS_SUCCESS":
      return {
        loading: false,
        product: action.payload,
      };
    case "PRODUCT_DETAILS_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    case "CLEAR_ERROR":
      return { ...state, error: null };

    default:
      return state;
  }
};
export const newReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case "NEW_REVIEW_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "NEW_REVIEW_SUCCESS":
      return {
        ...state,
        loading: false,
        review: action.payload,
      };
    case "NEW_REVIEW_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    case "NEW_REVIEW_RESET":
      return {
        ...state,

        review: false,
      };

    case "CLEAR_ERROR":
      return { ...state, error: null };

    default:
      return state;
  }
};

export const deleteAndupdateProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_PRODUCT_REQUEST":
    case "UPDATE_PRODUCT_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "DELETE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case "UPDATE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case "DELETE_PRODUCT_FAIL":
    case "UPDATE_PRODUCT_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "DELETE_PRODUCT_RESET":
      return {
        ...state,

        isDeleted: false,
      };
    case "UPDATE_PRODUCT_RESET":
      return {
        ...state,

        isUpdated: false,
      };

    case "CLEAR_ERROR":
      return { ...state, error: null };

    default:
      return state;
  }
};
