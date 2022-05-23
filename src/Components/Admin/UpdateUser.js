import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";

import {
  clearErrors,
  createProduct,
  getProductDetails,
  updateProduct,
} from "../Redux/Action/Product";
import { useNavigate, useParams } from "react-router";
import { toast, Toaster } from "react-hot-toast";
import Loader from "../Header/Loader";
import { singleUserDetails, updateUser } from "../Redux/Action/User";

const UpdateProduct = () => {
  const { id } = useParams();
  const { handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userDetails);
 const navigate = useNavigate();
  const { error: updateError, isUpdated } = useSelector(
    (state) => state.updateUser
  );

  const [userInfo, setUserInfo] = useState({
    email: "",
    role: "",
    password: "",
  });

  const handleValue = (e) => {
    const newUser = { ...userInfo };
    newUser[e.target.name] = e.target.value;
    setUserInfo(newUser);
  };

  const onSubmit = async (e) => {
    const userData = {
      email: userInfo.email || user.email,
      role: userInfo.role || user.role,
      password: userInfo.password || user.password,
    };
    dispatch(updateUser(id, userData));
  };

  useEffect(() => {
    dispatch(singleUserDetails(id));

    if (updateError) {
      toast.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("User information updated successfully");
      dispatch({ type: "UPDATE_USER_RESET" });
      navigate("/admin/users");
    }
  }, [dispatch, id, updateError, isUpdated, navigate]);

  return (
  

    <>
      <main class="bg-gray-50 dark:bg-gray-800    overflow-hidden">
        <div class="md:flex items-start justify-between">
          <div class=" md:w-2/12 md:pr-12   ">
            <Sidebar />
          </div>

          <div class="md:10/12 flex flex-col  w-full ml-0 md:ml-12 mt-mmt2 md:mt-24 md:p-4 md:space-y-4 ">
            <div class="  md:pb-24 pt-16 px-2  md:pt-0 md:pr-0 md:pl-0">
              <div class="flex flex-col flex-wrap sm:flex-row ">
                <div class=" relative w-auto pointer-events-none ">
                  <div class="p-4 md:px-12 md:pt-8  border-none  relative flex flex-col w-full pointer-events-auto bg-white shadow bg-clip-padding rounded-md outline-none text-current">
                    <div class=" flex flex-shrink-0 items-center justify-between  border-b border-gray-200 rounded-t-md">
                      <h5
                        class="font-semibold text-lg  "
                        id="exampleModalLabel"
                      >
                        Update User
                      </h5>
                    </div>

                    <div className="mt-4 md:flex flex-row md:space-x-4 w-full text-xs uppercase te">
                      <div className="mb-3 space-y-2 w-full text-xs ">
                        <label className="font-semibold text-allTextColor  text-sm">
                          User name
                        </label>
                        <input
                          className="  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8"
                          required
                          type="text"
                          name="name"
                          onChange={handleValue}
                          defaultValue={user && user.name}
                        />
                      </div>
                      <div className="mb-3 space-y-2 w-full text-xs ">
                        <label className="font-semibold text-allTextColor  text-sm">
                          Email
                        </label>
                        <input
                          className="  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8"
                          required
                          type="text"
                          name="email"
                          onChange={handleValue}
                          defaultValue={user && user.email}
                        />
                      </div>
                    </div>
                    <div className="md:flex flex-row md:space-x-4 w-full text-xs uppercase te">
                      <div className="mb-3 space-y-2 w-full text-xs ">
                        <label className="font-semibold text-allTextColor  text-sm">
                          Password
                        </label>
                        <input
                          className="  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8"
                          required
                          type="text"
                          name="password"
                          onChange={handleValue}
                          defaultValue={user && user.password}
                        />
                      </div>
                      <div className="mb-3 space-y-2 w-full text-xs ">
                        <label className="font-semibold text-allTextColor  text-sm">
                          Role
                        </label>
                        <select
                          className="  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8"
                          required
                          type="text"
                          name="role"
                          onChange={handleValue}
                        >
                          <option defaultValue={user && user.role}>
                            {user && user.role}
                          </option>
                          {user && user.role === "admin" ? (
                            <option defaultValue="user">user</option>
                          ) : (
                            <option defaultValue="admin">admin</option>
                          )}
                        </select>
                      </div>
                    </div>

                    <div className="md:flex flex-row md:space-x-4 w-full text-xs uppercase">
                      <div class=" flex flex-shrink-0 flex-wrap items-center justify-end pb-8  ">
                        <button
                          onClick={() => onSubmit()}
                          //  disabled={loading ? true : false}
                          type="submit"
                          class="px-6
      py-2.5
      bg-mainBaseColor
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md

      transition
      duration-150
      ease-in-out
      ml-1"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Toaster />
    </>
  );
};

export default UpdateProduct;
