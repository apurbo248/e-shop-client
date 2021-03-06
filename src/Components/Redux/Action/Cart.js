import axios from "axios";

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `https://shrouded-falls-78834.herokuapp.com/v1/product/${id}`
  );

  dispatch({
    type: "ADD_TO_CART",
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      quantity,
      stock: data.product.stock,
      image: data.product.image[0].url,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeToCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: "REMOVE_CART_ITEM",
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingInfo = (data) => async (dispatch) => {
 
  dispatch({
    type: "SAVE_SHIPPING_INFO",
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
