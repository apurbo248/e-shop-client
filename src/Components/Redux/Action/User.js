import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  //console.log(email, password);
  try {
    dispatch({ type: "USER_REQUEST" });
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const { data } = await axios.post(
      "http://localhost:1234/v1/user/login",

      { email, password },
      config
    );
    console.log(data);

    dispatch({
      type: "USER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    console.log(error);

    dispatch({
      type: "USER_FAIL",
      payload: error.response.data.msg,
    });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_REQUEST" });
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const { data } = await axios.post(
      `http://localhost:1234/v1/user/register`,
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
      payload: error.response.data.msg,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "LOAD_USER_REQUEST" });

    const { data } = await axios.get("http://localhost:1234/v1/me", {
      withCredentials: true,
    });

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

    const { data } = await axios.get("http://localhost:1234/v1/users", {
      withCredentials: true,
    });

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

    const { data } = await axios.get(`http://localhost:1234/v1/user/${id}`, {
      withCredentials: true,
    });

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
      withCredentials: true,
    };
    const { data } = await axios.put(
      `http://localhost:1234/v1/update_user/${id}`,
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
  console.log(id);
  try {
    dispatch({ type: "DELETE_USER_REQUEST" });

    const { data } = await axios.delete(
      `http://localhost:1234/v1/delete_user/${id}`,
      {
        withCredentials: true,
      }
    );
    console.log(data);
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
    await axios.get("http://localhost:1234/v1/logout", {
      withCredentials: true,
    });

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
