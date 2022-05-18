import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  //console.log(email, password);
  try {
    dispatch({ type: "USER_REQUEST" });
    const config = {
      headers: { "Content-Type": "application/json" },
    //withCredentials: true,
    };
    const { data } = await axios.post(
      "https://shrouded-falls-78834.herokuapp.com/v1/user/login",

      { email, password },
      config
    );

    dispatch({
      type: "USER_SUCCESS",
      payload: data,
    });

    localStorage.setItem("userToken", data.token);
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
      // withCredentials: true,
    };
    const { data } = await axios.post(
      `https://shrouded-falls-78834.herokuapp.com/v1/user/register`,
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

    const { data } = await axios.get(
      "https://shrouded-falls-78834.herokuapp.com/v1/me",
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      },
      
    );

    dispatch({
      type: "LOAD_USER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "LOAD_USER_FAIL",
      payload: error.response,
    });
  }
};
export const allUser = () => async (dispatch) => {
  try {
    dispatch({ type: "ALL_USER_REQUEST" });

    const { data } = await axios.get(
      "https://shrouded-falls-78834.herokuapp.com/v1/users",
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
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
      `https://shrouded-falls-78834.herokuapp.com/v1/user/${id}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
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
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    };
    const { data } = await axios.put(
      `https://shrouded-falls-78834.herokuapp.com/v1/update_user/${id}`,
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
      `https://shrouded-falls-78834.herokuapp.com/v1/delete_user/${id}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
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
    await axios.get("https://shrouded-falls-78834.herokuapp.com/v1/logout", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
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
