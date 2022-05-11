import axios from "axios";

export const newOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE_ORDER_REQUEST" });

    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.post(
      "https://tranquil-bayou-10024.herokuapp.com/v1/order/new",
      order,
      config
    );

    dispatch({
      type: "CREATE_ORDER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "CREATE_ORDER_FAIL",
      payload: error.response.data.message,
    });
  }
};
export const updateOrder = (id, status) => async (dispatch) => {
  console.log(id,status);
  try {
    dispatch({ type: "UPDATE_ORDER_REQUEST" });

    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.put(
      `https://tranquil-bayou-10024.herokuapp.com/v1/orderstatus/${id}`,
      status,
      config
    );
    
    dispatch({
      type: "UPDATE_ORDER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_ORDER_FAIL",
      payload: error.response,
    });
  }
};
export const allOrder = () => async (dispatch) => {
  try {
    dispatch({ type: "ALL_ORDER_REQUEST" });

    const { data } = await axios.get(
      "https://tranquil-bayou-10024.herokuapp.com/v1/orders"
    );

    dispatch({
      type: "ALL_ORDER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "ALL_ORDER_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const deleteOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_ORDER_REQUEST" });

    const { data } = await axios.delete(
      `https://tranquil-bayou-10024.herokuapp.com/v1/order/${id}`
    );
   
    dispatch({
      type: "DELETE_ORDER_SUCCESS",
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_ORDER_FAIL",
      payload: error.response.data.msg,
    });
  }
};
export const myOrders = () => async (dispatch) => {
  try {
    dispatch({ type: "MY_ORDER_REQUEST" });

    const { data } = await axios.get("https://tranquil-bayou-10024.herokuapp.com/v1/orders/my");

    dispatch({
      type: "MY_ORDER_SUCCESS",
      payload: data.orders,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "MY_ORDER_FAIL",
      payload: error.response.data.msg,
    });
  }
};

export const orderDetail = (id) => async (dispatch) => {
  console.log(id)
  try {
    dispatch({ type: "ORDER_DETAIL_REQUEST" });

    const { data } = await axios.get(
      `https://tranquil-bayou-10024.herokuapp.com/v1/order/${id}`
    );
console.log(data)
    dispatch({
      type: "ORDER_DETAIL_SUCCESS",
      payload: data.order,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "ORDER_DETAIL_FAIL",
      payload: error.response.data.message,
    });
  }
};

//ClearingError
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: "CLEAR_ERROR" });
};
