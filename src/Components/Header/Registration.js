import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/Action/User";
import { clearErrors } from "../Redux/Action/Product";
import Navbar from "./Navbar";
import {
  
  getAuth,
  
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
 const auth = getAuth();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { error, isAuthenticated } = useSelector((state) => state.userInfo);

  const handleValue = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const registrationSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = newUser;

    // const { name, email, password } = newUser;
    // dispatch(register(name, email, password));
    console.log(email, password);
    if (password.length < 6) {
      return toast.error("password must be at least 6 characters");
    }

   

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
       if(result){

verifyEmail();

       }
        
       
      })
      .catch((error) => {
        
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        toast.error(errorCode, errorMessage);
        console.log(errorMessage);

         if (!error) {
           toast.success("Registration successfully");
         }
      });
  };
const verifyEmail=()=>{
  sendEmailVerification(auth.currentUser).then((result) => {
    console.log(result);
toast.success("Successfully register,Please check your email");
  });
}
  useEffect(() => {
    // if (isAuthenticated) {
    //   toast.success("Registration successfully");
    //   window.location.href = "/v1/user/login";
    // }
  }, [error, dispatch, isAuthenticated, navigate]);

  return (
    <>
      <Navbar />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-20 mx-auto flex flex-wrap items-center">
          <div class=" md:w-2/6 bg-gray-100 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-10">
            <form>
              <h2 class="text-gray-900 text-lg font-medium title-font mb-2">
                Sign Up
              </h2>
              <div class="relative mb-4">
                <label for="full-name" class="leading-7 text-sm text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  onChange={handleValue}
                  value={newUser.name}
                  name="name"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

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
                onClick={registrationSubmit}
                class="text-white bg-mainBaseColor border-0 py-2 px-8 focus:outline-none  rounded text-md"
              >
                Sign up
              </button>
              <p class="text-xs text-gray-500 mt-3">
                Already have an account?
                <Link
                  to="/v1/user/login"
                  className="underline text-md font-bold"
                >
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
        <Toaster />
      </section>
    </>
  );
};

export default Registration;
