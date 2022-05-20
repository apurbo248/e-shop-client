import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getProductsReducer,
  getProductDetailsReducer,
  newReviewReducer,
  createOrderReducer,
  deleteAndupdateProductReducer,
} from "../Reducers/ProductsReducers";
import {
  allUserReducer,
  profileReducer,
  registrationUserReducer,
  userReducer,
  usersDetailsReducer,
} from "../Reducers/UserReducer";
import { cartReducer } from "../Reducers/CartReducer";
import {
  allOrderReducer,
  deleteAndupdateOrderReducer,
  MyOrderReducer,
  newOrderReducer,
  OrderDetailReducer,
} from "../Reducers/Order";
import { allReviewReducer, deleteReviewReducer } from "../Reducers/Review";

const rootReducer = combineReducers({
  ProductsData: getProductsReducer,
  ProductDetails: getProductDetailsReducer,
  userInfo: userReducer,
  registerUserInfo: registrationUserReducer,
  cart: cartReducer,
  order: newOrderReducer,
  MyOrder: MyOrderReducer,
  orderDetail: OrderDetailReducer,
  allOrder: allOrderReducer,
  orders: deleteAndupdateOrderReducer,
  newReview: newReviewReducer,
  addProduct: createOrderReducer,
  products: deleteAndupdateProductReducer,
  allUserInfo: allUserReducer,
  userDetails: usersDetailsReducer,
  updateUser: profileReducer,
  allReview: allReviewReducer,
  deleteReview: deleteReviewReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],

    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};
const middleware = [thunk];

const Store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
