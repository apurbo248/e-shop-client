import React, { useEffect, useState } from "react";
import Tabs from "react-simply-tabs";
import { Link } from "react-router-dom";
import img from "../img.jpg";

import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { myOrders } from "../Redux/Action/Order";

const Profile = ({ user }) => {
  const dispatch = useDispatch();
  const { myOrder, error, loading } = useSelector((state) => state.MyOrder);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  let [categories] = useState({
    Orders: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Transactions: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
  });

  console.log()
  useEffect(() => {
    dispatch(myOrders());
  }, [dispatch, error]);
  return (
    <div>
      <Navbar />

      <section class="pt-20 lg:pt-[120px]  bg-gray-100 md:h-screen overflow-hidden">
        <div class="container">
          <div class="flex flex-wrap   ">
            <div class="w-full md:w-8/12     rounded   ">
              <div class=" mx-auto mb-10 ">
                <p class="text-3xl font-semibold">All History</p>

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
                                  {myOrder && myOrder.length > 0 ? (
                                    myOrder &&
                                    myOrder.map((item) => (
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

                    <div>2 tab</div>

                    <div>3 tab</div>
                  </Tabs>
                </div>
              </div>
            </div>

            <div class="w-full md:w-4/12  px-4 ">
              <div class="max-w-[370px] mx-auto mb-10 bg-white rounded shadow-sm">
                <div class="min-h- flex flex-col max-w-md mx-auto  opacity-100 font-poppins px-4 bg-no-repeat bg-cover bg-center">
                  <div class="flex items-center px-4 rounded mt-4 justify-between shadow-sm">
                    <div class="w-24 h-24  flex items-center ">
                      <img class="h-20 w-20 mx-auto rounded-full" src={img} />
                    </div>
                    <div class="w-9/12 flex items-center">
                      <div class="w-10/12 flex flex-col leading-none pl-4">
                        <p class="text-2xl font-bold">{user.name}</p>
                      </div>
                      <div class="w-2/12">
                        <div>
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
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="py-4 px-4 w-full flex flex-col">
                    <div class="flex flex-col w-full pt-2 ">
                      <p class="font- text-gray-500">Phone</p>
                      <p class="text-gray-800">fdg</p>
                    </div>
                    <div class="flex flex-col w-full pt-3 ">
                      <p class="font- text-gray-500">Email</p>
                      <p class="text-gray-800">{user.email}</p>
                    </div>
                    <div class="flex flex-col w-full pt-3 ">
                      <p class="font- text-gray-500">Role</p>
                      <p class="text-gray-800">{user.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section class="text-gray-600 body-font md:mt-8 overflow-hidden">
        <div class="container px-5 py-12 mx-auto border shadow rounded-xl ">
          <div class="lg:w-4/5 mx-44 flex flex-wrap ">
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py- mt-6 lg:mt-0">
              <img
                alt="ecommerce"
                class="lg:w-54 w-54 lg:h-54 h-54 object-cover object-center rounded-full"
                src={img}ZcdS
              />

              <div class="flex md:mt-1 ">
                <button class="flex mr-auto text-white bg-yellow-500  text-lg  border py-2 px-24 focus:outline-none  rounded">
                  Edit Profile
                </button>
              </div>
            </div>

            <div class="lg:w-1/2 w-full lg:pl-10 lg:py- mt-6 lg:mt-0">
              <h2 class="text-lg title-font text-gray-900  font-medium">
                Name
              </h2>
              <h2 class="text-sm title-font text-gray-500  font-medium">
                {user && user.name}
              </h2>
              <h2 class="mt-14 text-lg title-font text-gray-900  font-medium">
                Email
              </h2>
              <h2 class="text-sm title-font text-gray-500  font-medium">
                {user && user.email}
              </h2>
              <h2 class="mt-14 text-lg title-font text-gray-900  font-medium">
                Joined on
              </h2>
              <h2 class="text-sm title-font text-gray-500  font-medium">
                {String(user&&user.createdAt).substr(0, 10)}
              </h2>

              <div class="flex md:mt-20 ">
                <Link to="/my_orders">
                  <button class="flex  text-gray-900 border-1 border-yellow-500  py-2 px-6 focus:outline-none hover:bg-yellow-100 rounded">
                    Order List
                  </button>
                </Link>

                <button class="flex ml-12 text-gray-900  border-1 border-yellow-500 py-2 px-6 focus:outline-none hover:bg-yellow-100 rounded">
                  Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Profile;
