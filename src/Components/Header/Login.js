import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { clearErrors } from "../Redux/Action/User";
import { login } from "../Redux/Action/User";
import Navbar from "./Navbar";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const location = useLocation();
 
 const [newUser, setNewUser] = useState({
   email: "",
   password: "",
 });
  const { error, isAuthenticated, user } = useSelector(
    (state) => state.userInfo
  );

  const handleValue = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };


  const { from } = location.state || { from: { pathname: "/" } };

const  onSubmit=(e)=>{

   const {  email, password } = newUser;
   dispatch(login( email, password));
}

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated && user) {
      toast.success("log in successfully");
      navigate(from);
    }
  }, [error, dispatch, isAuthenticated, navigate, from, user]);

  return (
    <>
      <Navbar />
      <section class="text-gray-600 body-font ">
        <div class="container  px-5 py-24 mx-auto flex-wrap items-center">
          <div class=" md:w-2/6 bg-gray-100 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 class="text-gray-900 text-lg font-medium title-font mb-2">
                Log in
              </h2>

              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={handleValue}
                  value={newUser.email}
                  name="email"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="password" class="leading-7 text-sm text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  onChange={handleValue}
                  value={newUser.password}
                  id="password"
                  name="password"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
              type="submit"
                
                class="text-white bg-mainBaseColor border-0 py-2 px-8 focus:outline-none  rounded text-md"
              >
                Login{" "}
              </button>
              <p class="text-xs text-gray-500 mt-3">
                Don't have an account?
                <Link
                  to="/v1/user/register"
                  className="underline text-md font-bold"
                >
                  Sign up
                </Link>
              </p>
            </form>

            {/* <button
              onClick={logInByGoogle}
              className="bg-mainBaseColor text-white  p-3 mt-4 rounded"
            >
              Google sign in
            </button> */}
          </div>
        </div>
        <Toaster />
      </section>
    </>
  );
};

export default Login;
