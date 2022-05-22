import React, { useEffect, useState } from "react";
import Tabs from "react-simply-tabs";
import { Link } from "react-router-dom";
import img from "../img.jpg";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { myOrders } from "../Redux/Action/Order";
import axios from "axios";
import { updateUser } from "../Redux/Action/User";
import toast, { Toaster } from "react-hot-toast";

const Profile = ({ userInfo }) => {
  const dispatch = useDispatch();
  const { myOrderList, loading } = useSelector((state) => state.MyOrder);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const { user } = useSelector((state) => state.userDetails);
  const { error: updateError, isUpdated } = useSelector(
    (state) => state.updateUser
  );
  const [imageLoading, setImageLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [userInfoUpdate, setUserInfoUpdate] = useState({
    name: "",
    phone: "",
  });

  const handleValue = (e) => {
    const newUser = { ...userInfoUpdate };
    newUser[e.target.name] = e.target.value;
    setUserInfoUpdate(newUser);
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
      name: userInfoUpdate.name||userInfo.name,
      phone:userInfoUpdate.phone|| userInfo.phone ,
      avatar: {
        url: image || userInfo.avatar.url,
      },
    };
    console.log(userData);
    dispatch(updateUser(userInfo._id, userData));
  };

  useEffect(() => {
    dispatch(myOrders());

    if (isUpdated) {
      toast.success("Profile updated successfully");
      dispatch({ type: "UPDATE_USER_RESET" });
    }
  }, [dispatch, isUpdated]);
  return (
    <div>
      <Navbar />

      <section class="pt-20 lg:pt-[120px]  bg-gray-100 md:h-screen overflow-hidden">
        <div class="container">
          <div class="flex flex-wrap   ">
            <div class="w-full md:w-4/12  px-4 ">
              <div class="max-w-[370px] mx-auto mb-10 bg-white rounded shadow-sm">
                <div class="min-h- flex flex-col max-w-md mx-auto  opacity-100 font-poppins px-4 bg-no-repeat bg-cover bg-center">
                  <div class="flex items-center px-4 rounded mt-4 justify-between shadow-sm">
                    <div class="w-24 h-24  flex items-center ">
                      <img
                        alt="profile image"
                        class="h-20 w-20 mx-auto rounded-full"
                        src={userInfo && userInfo.avatar.url}
                      />
                    </div>
                    <div class="w-9/12 flex items-center">
                      <div class="w-10/12 flex flex-col leading-none pl-4">
                        <p class="text-2xl font-bold">{user.name}</p>
                      </div>
                      <div class="w-2/12">
                        <div>
                          <button
                            className="button"
                            onClick={() => setOpen(true)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="text-gray-700"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                            >
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M9.243 19H21v2H3v-4.243l9.9-9.9 4.242 4.244L9.242 19zm5.07-13.556l2.122-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z" />
                            </svg>
                          </button>

                          <Modal open={open} onClose={() => setOpen(false)}>
                            <div class="flex flex-col flex-wrap sm:flex-row md:p-4 ">
                              <div class=" relative  pointer-events-none ">
                                <div class=" md:pt-8 modal-content border-none  relative flex flex-col w-full overflow-x-auto height pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                  <div class=" flex flex-shrink-0 items-center justify-between  border-b border-gray-200 rounded-t-md">
                                    <h5
                                      class="font-semibold text-lg  "
                                      id="exampleModalLabel"
                                    >
                                      Update User
                                    </h5>
                                  </div>

                                  <div>
                                    <div className="md:space-y-2  ">
                                      <div className="flex flex-col md:flex-row items-center py-6">
                                        <label className="cursor-pointer pb-4 md:pb-0">
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
                                                    Take a deep breath...
                                                    &#127804;
                                                  </span>
                                                </button>
                                              </div>
                                            ) : (
                                              <div class="rounded-xl overflow-hidden    shadow hover:shadow-md max-w-full bg-white cursor-pointer h-28">
                                                <div class="  w-full p-1">
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
                                            <div class="lg:  w-full p-1">
                                              <img
                                                alt="You will see your choosed pictures here"
                                                src={
                                                  userInfo &&
                                                  userInfo.avatar.url
                                                }
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
                                          defaultValue={
                                            userInfo && userInfo.name
                                          }
                                        />
                                      </div>
                                      <div className="md:flex flex-row md:space-x-4 w-full text-xs uppercase te">
                                        <div className="mb-3 space-y-2 w-full text-xs ">
                                          <label className="font-semibold text-allTextColor  text-sm">
                                            Phone
                                          </label>
                                          <input
                                            className="  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8"
                                            required
                                            type="number"
                                            name="phone"
                                            onChange={handleValue}
                                            defaultValue={
                                              userInfo && userInfo.phone
                                            }
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="md:flex flex-row md:space-x-4 mt-4 md:pl-96 w-full text-xs uppercase">
                                    <button
                                      onClick={() => onSubmit()}
                                      //  disabled={loading ? true : false}
                                      type="submit"
                                      class="px-28
      py-2.5
      bg-mainBaseColor
      text-white
      font-medium
      text-lg
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
                                    <Toaster />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Modal>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="py-4 px-4 w-full flex flex-col">
                    <div class="flex flex-col w-full pt-3 ">
                      <p class="font- text-gray-500">Phone</p>
                      <p class="text-gray-800">{userInfo.phone}</p>
                    </div>
                    <div class="flex flex-col w-full pt-3 ">
                      <p class="font- text-gray-500">Email</p>
                      <p class="text-gray-800">{userInfo.email}</p>
                    </div>
                    <div class="flex flex-col w-full pt-3 ">
                      <p class="font- text-gray-500">Role</p>
                      <p class="text-gray-800">{userInfo.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-8/12     rounded   ">
              <div class=" mx-auto mb-10 ">
                <p class="text-2xl font-semibold underline">All History</p>

                <div>
                  <Tabs
                    activeTabIndex={activeTabIndex}
                    onRequestChange={setActiveTabIndex}
                    controls={[
                      <button
                        className="bg-mainBaseColor  px-2 text-white text-lg rounded "
                        type="button"
                      >
                        Orders
                      </button>,

                      <button
                        className="bg-mainBaseColor px-2 text-white text-lg ml-6 my-3 rounded"
                        type="button"
                      >
                        Transaction
                      </button>,
                    ]}
                  >
                    <div>
                      <div className="h-screen overflow-y-auto   sm:px- w-full  md:mt-0 md:w-full  align-center  pb-14">
                        {loading ? (
                          <Loader />
                        ) : (
                          <div className="   md:mb-28   ">
                            <div className=" overflow-x-auto">
                              <table className="w-full whitespace-nowrap bg-white">
                                <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                  <tr>
                                    <th scope="col" className="px-6 py-3">
                                      # Order id
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                      Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                      Amount
                                    </th>

                                    <th scope="col" className=" py-3">
                                      <span className=""></span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {myOrderList && myOrderList.length > 0 ? (
                                    myOrderList.map((item) => (
                                      <tr className="h-16 border-b border-gray-100 rounded">
                                        <td className>
                                          <div className="flex items-center pl-5">
                                            <p className="text-base font-medium leading-none text-gray-700 mr-2">
                                              # {item._id}
                                            </p>
                                          </div>
                                          <p className="mt-2 pl-5 text-sm font-sm leading-none text-gray-700 mr-2">
                                            Item - {item.orderItems.length}
                                          </p>
                                        </td>

                                        <td className="pl-5">
                                          <span
                                            className={
                                              item.orderStatus === "Processing"
                                                ? "py-1 px-2 text-md focus:outline-none leading-none text-yellow-500 bg-yellow-100  rounded"
                                                : "py-1 px-2 text-md focus:outline-none leading-none text-green-500 bg-green-100  rounded"
                                            }
                                          >
                                            {item.orderStatus}
                                          </span>
                                        </td>
                                        <td className="pl-5">
                                          <div className="flex items-center">
                                            <p className="text-sm leading-none text-gray-600 ml-2">
                                              $ {item.totalPrice}
                                            </p>
                                          </div>
                                        </td>
                                        <td className="">
                                          <Link to={`/v1/order/${item._id}`}>
                                            <button className="text-sm leading-none text-gray-600 py-2 px-3  rounded hover:bg-gray-200 focus:outline-none">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon cursor-pointer icon-tabler icon-tabler-edit"
                                                width={20}
                                                height={20}
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                              >
                                                <path
                                                  stroke="none"
                                                  d="M0 0h24v24H0z"
                                                />
                                                <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                                <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                                <line
                                                  x1={16}
                                                  y1={5}
                                                  x2={19}
                                                  y2={8}
                                                />
                                              </svg>
                                            </button>
                                          </Link>
                                        </td>
                                      </tr>
                                    ))
                                  ) : (
                                    <div class="ml-24">
                                      <div class="m-4 h-10 p-4    bg-white flex justify-center content-center flex-wrap">
                                        <p class="font-sans text-gray-900 text-2xl ">
                                          Order Not Found
                                        </p>
                                      </div>
                                    </div>
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>coming soon</div>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </section>
    </div>
  );
};

export default Profile;
