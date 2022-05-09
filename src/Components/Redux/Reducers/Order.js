export const newOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_ORDER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "CREATE_ORDER_SUCCESS":
      return {
        loading: false,
        order: action.payload,
      };
    case "CREATE_ORDER_FAIL":
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
export const allOrderReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "ALL_ORDER_REQUEST":
      return {
        loading: true,
      };
    case "ALL_ORDER_SUCCESS":
      return {
        loading: false,
        orders: action.payload.orders,
        totalOrder: action.payload.totalOrder,
        totalAmount: action.payload.totalAmount,
      };
    case "ALL_ORDER_FAIL":
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
export const deleteAndupdateOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_ORDER_REQUEST":
    case "UPDATE_ORDER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case "UPDATE_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case "DELETE_ORDER_FAIL":
    case "UPDATE_ORDER_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "DELETE_ORDER_RESET":
      return {
        ...state,
        isDeleted: false,
      };
    case "UPDATE_ORDER_RESET":
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
export const MyOrderReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "MY_ORDER_REQUEST":
      return {
        loading: true,
      };
    case "MY_ORDER_SUCCESS":
      return {
        loading: false,
        orders: action.payload,
       
      };
    case "MY_ORDER_FAIL":
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

export const OrderDetailReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case "ORDER_DETAIL_REQUEST":
      return {
        loading: true,
      };
    case "ORDER_DETAIL_SUCCESS":
      return {
        loading: false,
        order: action.payload,
      };
    case "ORDER_DETAIL_FAIL":
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
