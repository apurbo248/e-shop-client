export const registrationUserReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return {
        loading: true,
        success: false,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        loading: false,
        success: true,
        user: action.payload.user,
      };

    case "USER_REGISTER_FAIL":
      return {
        loading: false,
        success: false,
        user: null,
        error: action.payload,
      };

    case "CLEAR_ERROR":
      return { ...state, error: null };

    default:
      return state;
  }
};
export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case "USER_REQUEST":
    case "LOAD_USER_REQUEST":
      return {
        loading: true,
        isAuthenticated: false,
      };

    case "USER_SUCCESS":
    case "LOAD_USER_SUCCESS":
      return {
        loading: false,
        isAuthenticated: true,
        user: action.payload.user,
      };

    case "LOGOUT_SUCCESS":
      return {
        loading: false,
        user: null,
        isAuthenticated: false,
      };

    case "USER_FAIL":
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case "LOAD_USER_FAIL":
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case "LOGOUT_FAIL":
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
export const allUserReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "ALL_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ALL_USER_SUCCESS":
      return {
        ...state,
        loading: false,

        users: action.payload,
      };

    case "ALL_USER_FAIL":
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
export const usersDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case "USER_DETAIL_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "USER_DETAIL_SUCCESS":
      return {
        ...state,
        loading: false,

        user: action.payload,
      };

    case "USER_DETAIL_FAIL":
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
export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_USER_REQUEST":
    case "DELETE_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "UPDATE_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case "DELETE_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case "UPDATE_USER_FAIL":
    case "DELETE_USER_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "UPDATE_USER_RESET":
      return {
        ...state,
        isUpdated: false,
      };
    case "DELETE_USER_RESET":
      return {
        ...state,
        isDeleted: false,
      };

    case "CLEAR_ERROR":
      return { ...state, error: null };

    default:
      return state;
  }
};
