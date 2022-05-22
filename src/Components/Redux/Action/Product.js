import axios from "axios";

export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: "NEW_PRODUCT_REQUEST" });

    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    };

    const { data } = await axios.post(
      "https://shrouded-falls-78834.herokuapp.com/v1/product/create",
      productData,
      config
    );

    dispatch({
      type: "NEW_PRODUCT_SUCCESS",
      payload: data,
    });
  } catch (error) {
    console.log(error.response.data)
    dispatch({
      type: "NEW_PRODUCT_FAIL",
      payload: error.response.data,
    });
  }
};
export const updateProduct = (id, productData) => async (dispatch) => {
 
  try {
    dispatch({ type: "UPDATE_PRODUCT_REQUEST" });

    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    };
    const { data } = await axios.put(
      `https://shrouded-falls-78834.herokuapp.com/v1/product/${id}`,
      productData,
      config
    );
   
    dispatch({
      type: "UPDATE_PRODUCT_SUCCESS",
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_PRODUCT_FAIL",
      payload: error.response,
    });
  }
};
export const getAdminProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "ADMIN_ALL_PRODUCT_REQUEST" });

    const { data } = await axios.get(
      "https://shrouded-falls-78834.herokuapp.com/v1/admin/all_products"
    );

    dispatch({
      type: "ADMIN_ALL_PRODUCT_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ADMIN_ALL_PRODUCT_FAIL",
      payload: error.response,
    });
  }
};
export const getProducts =
  (keyword = "", currentPage = 1, price = [0, 5000]) =>
  async (dispatch) => {
    try {
      dispatch({ type: "ALL_PRODUCT_REQUEST" });

      const { data } = await axios.get(
        `https://shrouded-falls-78834.herokuapp.com/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`
      );

      dispatch({
        type: "ALL_PRODUCT_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "ALL_PRODUCT_FAIL",
        payload: error.response,
      });
    }
  };

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_DETAILS_REQUEST" });

    const { data } = await axios.get(
      `https://shrouded-falls-78834.herokuapp.com/v1/product/${id}`
    );

    dispatch({
      type: "PRODUCT_DETAILS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "PRODUCT_DETAILS_FAIL",
      payload: error.response,
    });
  }
};
export const newReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: "NEW_REVIEW_REQUEST" });
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    };
    const { data } = await axios.put(
      "https://shrouded-falls-78834.herokuapp.com/v1/create/review",
      reviewData,
      config
    );

    dispatch({
      type: "NEW_REVIEW_SUCCESS",
      payload: data.review,
    });
  } catch (error) {
    dispatch({
      type: "NEW_REVIEW_FAIL",
      payload: error.response,
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
 

  try {
    dispatch({ type: "DELETE_PRODUCT_REQUEST" });

    const { data } = await axios.delete(
      `https://shrouded-falls-78834.herokuapp.com/v1/delete_product/${id}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
    );

    dispatch({
      type: "DELETE_PRODUCT_SUCCESS",
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_PRODUCT_FAIL",
      payload: error.response.data.msg,
    });
  }
};
export const allReview = (id) => async (dispatch) => {
  try {
    dispatch({ type: "ALL_REVIEW_REQUEST" });

    const { data } = await axios.get(
      `https://shrouded-falls-78834.herokuapp.com/v1/reviews?id=${id}`
    );

    dispatch({
      type: "ALL_REVIEW_SUCCESS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "ALL_REVIEW_FAIL",
      payload: error.response,
    });
  }
};
export const deleteReview = (id, productId) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_REVIEW_REQUEST" });

    const { data } = await axios.delete(
      `https://shrouded-falls-78834.herokuapp.com/v1/delete_review?id=${id}&productId=${productId}`,
      { authorization: `Bearer ${localStorage.getItem("userToken")}` }
    );

    dispatch({
      type: "DELETE_REVIEW_SUCCESS",
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_REVIEW_FAIL",
      payload: error.response,
    });
  }
};

//ClearingError
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: "CLEAR_ERROR" });
};
