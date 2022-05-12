import axios from "axios";

export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: "NEW_PRODUCT_REQUEST" });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const { data } = await axios.post(
      "http://localhost:1234/v1/product/create",
      productData,
      config
    );

    dispatch({
      type: "NEW_PRODUCT_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "NEW_PRODUCT_FAIL",
      payload: error.response,
    });
  }
};
export const updateProduct = (id, productData) => async (dispatch) => {
  console.log(productData);
  try {
    dispatch({ type: "UPDATE_PRODUCT_REQUEST" });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const { data } = await axios.put(
      `http://localhost:1234/v1/product/${id}`,
      productData,
      config
    );
    console.log(data);
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
export const getProducts =
  (keyword = "", currentPage = 1, price = [0, 5000]) =>
  async (dispatch) => {
    try {
      dispatch({ type: "ALL_PRODUCT_REQUEST" });

      const { data } = await axios.get(
        `http://localhost:1234/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`
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
export const getAdminProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "ADMIN_ALL_PRODUCT_REQUEST" });

    const { data } = await axios.get(
      "http://localhost:1234/v1/admin/all_products",
      
    );
    console.log(data);
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
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_DETAILS_REQUEST" });

    const { data } = await axios.get(`http://localhost:1234/v1/product/${id}`);

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
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const { data } = await axios.put(
      "http://localhost:1234/v1/create/review",
      reviewData,
      config
    );
    console.log(data);
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
      `http://localhost:1234/v1/product/${id}`,
      { withCredentials: true }
    );
    console.log(data);
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
      `http://localhost:1234/v1/reviews?id=${id}`,
      { withCredentials: true }
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
      `http://localhost:1234/v1/delete_review?id=${id}&productId=${productId}`,
      { withCredentials: true }
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
