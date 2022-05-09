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
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userDetails);

  const { error: updateError, isUpdated } = useSelector(
    (state) => state.updateUser
  );
 

  const [imageLoading, setImageLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });

  const handleValue = (e) => {
    const newUser = { ...userInfo };
    newUser[e.target.name] = e.target.value;
    setUserInfo(newUser);
    console.log(newUser);
  };

  const uploadImage = async (e) => {
    setImageLoading(true);
    const imageData = new FormData();
    imageData.set("key", "c9e7c4b6f1a9856f03990d5024785ae5");
    imageData.append("image", e.target.files[0]);
    await axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImage(response.data.data.display_url);
        setImageLoading(false);
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = async (e) => {
    const userData = {
      name: userInfo.name || user.name,
      email: userInfo.email || user.email,
      role: userInfo.role || user.role,
      password: userInfo.password || user.password,

      // image: {
      //   url: image || user.image[0].url,
      // },
    };
    console.log(userData);
    dispatch(updateUser(id, userData));
  };

  useEffect(() => {
    dispatch(singleUserDetails(id));

    
    if (updateError) {
      toast.error(updateError);
      dispatch(clearErrors());
       dispatch({ type: "UPDATE_USER_RESET" });
    }

    if (isUpdated) {
      toast.success("User information updated successfully");
      dispatch({ type: "UPDATE_USER_RESET" });
      //Navigate("/admin_dashboard")
    }
  }, [dispatch, id, updateError, isUpdated]);

  return (
    <>
      <main class="bg-gray-50 dark:bg-gray-800  h-screen overflow relative">
        <div class="md:flex items-start justify-between">
          <div class=" md:w-2/12 md:pr-12   ">
            <Sidebar />
          </div>

          <div class="md:10/12 flex flex-col w-full ml-0 md:ml-4 mt-mmt1 md:mt-0 md:p-4 md:space-y-4 ">
            <div class=" h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
              <div class="flex flex-col flex-wrap sm:flex-row ">
                <div class=" relative w-auto pointer-events-none ">
                  <div class="md:px-12 md:pt-8 modal-content border-none  relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div class=" flex flex-shrink-0 items-center justify-between  border-b border-gray-200 rounded-t-md">
                      <h5
                        class="font-semibold text-lg  "
                        id="exampleModalLabel"
                      >
                        Update User
                      </h5>
                    </div>

                    <div>
                      <div className="md:space-y-2 ">
                        <div className="flex items-center py-6">
                          <label className="cursor-pointer ">
                            <input
                              type="file"
                              name="image"
                              onChange={uploadImage}
                              className=""
                            />
                          </label>

                          {image ? (
                            <>
                              {imageLoading ? (
                                <div class=" items-center justify-center">
                                  <button
                                    type="button"
                                    class="flex items-center rounded-lg bg-green px-4 py-2 text-green-800"
                                    disabled
                                  >
                                    <svg
                                      class="mr-3 h-5 w-5 animate-spin text-green-800"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                    >
                                      <circle
                                        class="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                      ></circle>
                                      <path
                                        class="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                      ></path>
                                    </svg>
                                    <span class="font-medium">
                                      {" "}
                                      Take a deep breath... &#127804;
                                    </span>
                                  </button>
                                </div>
                              ) : (
                                <div class="rounded-xl overflow-hidden flex shadow hover:shadow-md max-w-full bg-white cursor-pointer h-28">
                                  <div class="w-2/2  text-text1  justify-center"></div>

                                  <div class="lg:  w-full p-1">
                                    <img
                                      alt="You will see your choosed pictures here"
                                      src={image && image}
                                      class="rounded-xl object-cover w-full h-full"
                                    />
                                  </div>
                                </div>
                              )}{" "}
                            </>
                          ) : (
                            <div class="rounded-xl overflow-hidden flex shadow hover:shadow-md max-w-full bg-white cursor-pointer h-28">
                              <div class="w-2/2  text-text1  justify-center"></div>

                              <div class="lg:  w-full p-1">
                                <img
                                  alt="You will see your choosed pictures here"
                                  // src={product && product.image[0].url}
                                  class="rounded-xl object-cover w-full h-full"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="md:flex flex-row md:space-x-4 w-full text-xs uppercase te">
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
        </div>
      </main>
      <Toaster />
    </>
  );
};

export default UpdateProduct;
