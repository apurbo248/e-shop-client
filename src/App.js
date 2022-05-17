import "./App.css";

import Home from "./Components/Header/Home";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Login from "./Components/Header/Login";
import Registration from "./Components/Header/Registration";
import Logout from "./Components/Header/Logout";


import Loader from "./Components/Header/Loader";
import ProductDetails from "./Components/Header/ProductDetails";
import AllProductpage from "./Components/Header/AllProductpage";
import ProductList from "./Components/Admin/ProductList";
import Search from "./Components/Header/Search";

import { loadUser } from "./Components/Redux/Action/User";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./Components/Header/Profile";
import Cart from "./Components/Header/Cart";
import ShippingInfo from "./Components/Header/ShippingInfo";
import ConfirmOrder from "./Components/Header/ConfirmOrder";
import Payment from "./Components/Header/Payment";
import ProtectedRoute from "./Components/Header/ProtectedRoute";
import Success from "./Components/Header/Success";
import MyOrder from "./Components/Header/MyOrder";
import OrderInfo from "./Components/Header/OrderInfo";
import Dashboard from "./Components/Admin/Dashboard";
import OrderList from "./Components/Admin/OrderList";
import AddProducts from "./Components/Admin/AddProducts";
import UpdateProduct from "./Components/Admin/UpdateProducts";
import UpdateStatus from "./Components/Admin/UpdateStatus";
import UpdateUser from "./Components/Admin/UpdateUser";
import AdminUserList from "./Components/Admin/AdminUserList";
import Review from "./Components/Admin/Review";
import { useEffect } from "react";


const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/sad" element={<Loader />} />
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/v1/user/login" element={<Login />} />
        <Route path="/v1/user/register" exact element={<Registration />} />

        <Route path="/v1/products" element={<AllProductpage />} />
        <Route path="/v1/products/:keyword" element={<AllProductpage />} />
        <Route
          path="/v1/product/:id"
          element={<ProductDetails />}
        />

        <Route path="/v1/cart" element={<Cart />} />

        <Route
          path="/*"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="me" element={<Profile user={user} />} />
          <Route path="my_orders" element={<MyOrder />} />
          <Route path="v1/order/:id" element={<OrderInfo />} />

          <Route
            path="v1/user/order/confirm"
            element={<ConfirmOrder user={user} />}
          />
          <Route path="v1/process/payment" element={<Payment />} />
          <Route
            path="admin_dashboard"
            element={user && user.role === "admin" && <Dashboard />}
          />
          <Route
            path="admin/products"
            element={user && user.role === "admin" && <ProductList />}
          />
          <Route
            path="admin/product_update/:id"
            element={user && user.role === "admin" && <UpdateProduct />}
          />
          <Route
            path="admin/orders"
            element={user && user.role === "admin" && <OrderList />}
          />
          <Route
            path="admin/users"
            element={user && user.role === "admin" && <AdminUserList />}
          />
          <Route
            path="admin/reviews"
            element={user && user.role === "admin" && <Review />}
          />
          <Route path="shipping" element={<ShippingInfo />} />

          <Route
            path="admin/add_product"
            element={user && user.role === "admin" && <AddProducts />}
          />

          <Route
            path="orderupdate/:id"
            element={user && user.role === "admin" && <UpdateStatus />}
          />
          <Route
            path="admin/user_update/:id"
            element={user && user.role === "admin" && <UpdateUser />}
          />

          <Route path="success" element={<Success />} />
        </Route>
        <Route path="/" element={<Logout />} />
      </Routes>
    </>
  );
};

export default App;
