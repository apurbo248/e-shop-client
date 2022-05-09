import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REQUEST" });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.post(
      `https://tranquil-bayou-10024.herokuapp.com/v1/user/login`,
      { email, password },
      config
    );
    dispatch({
      type: "USER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "USER_FAIL",
      payload: error.response.data,
    });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_REQUEST" });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.post(
      `https://tranquil-bayou-10024.herokuapp.com/v1/user/register`,
      { name, email, password },
      config
    );
    dispatch({
      type: "USER_REGISTER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "USER_REGISTER_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "LOAD_USER_REQUEST" });

    const { data } = await axios.get(
      "https://tranquil-bayou-10024.herokuapp.com/v1/me"
    );

    dispatch({
      type: "LOAD_USER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "LOAD_USER_FAIL",
      payload: error.response.data.message,
    });
  }
};
export const allUser = () => async (dispatch) => {
  try {
    dispatch({ type: "ALL_USER_REQUEST" });

    const { data } = await axios.get(
      "https://tranquil-bayou-10024.herokuapp.com/v1/users"
    );

    dispatch({
      type: "ALL_USER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ALL_USER_FAIL",
      payload: error.response,
    });
  }
};
export const singleUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "USER_DETAIL_REQUEST" });

    const { data } = await axios.get(
      `https://tranquil-bayou-10024.herokuapp.com/v1/user/${id}`
    );

    dispatch({
      type: "USER_DETAIL_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "USER_DETAIL_FAIL",
      payload: error.response,
    });
  }
};
export const updateUser = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_USER_REQUEST" });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.put(
      `https://tranquil-bayou-10024.herokuapp.com/v1/user/${id}`,
      userData,
      config
    );

    dispatch({
      type: "UPDATE_USER_SUCCESS",
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_USER_FAIL",
      payload: error.response,
    });
  }
};
export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_USER_REQUEST" });

    const { data } = await axios.get(
      `https://tranquil-bayou-10024.herokuapp.com/v1/user/${id}`
    );

    dispatch({
      type: "DELETE_USER_SUCCESS",
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_USER_FAIL",
      payload: error.response,
    });
  }
};
export const logout = () => async (dispatch) => {
  try {
    await axios.get("/v1/logout");

    dispatch({
      type: "LOGOUT_SUCCESS",
    });
  } catch (error) {
    dispatch({
      type: "LOGOUT_FAIL",
      payload: error.response.data.message,
    });
  }
};
//ClearingError
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: "CLEAR_ERROR" });
};
