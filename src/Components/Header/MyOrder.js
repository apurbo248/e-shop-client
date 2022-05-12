import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "../Redux/Action/Order";
import { myOrders } from "../Redux/Action/Order";
import { Link } from "react-router-dom";

import Loader from "./Loader";
import Navbar from "./Navbar";
import toast, { Toaster } from "react-hot-toast";

const MyOrder = () => {
 
  const { orders, error, loading } = useSelector((state) => state.MyOrder);
  const dispatch = useDispatch();
  console.log(error);
  useEffect(() => {
    if (error) {
       toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(myOrders());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <div className="sm:px-6 w-full  md:mt-0 md:w-full  align-center ">
        {loading ? (
          <Loader />
        ) : (
          <div className="mt-20  bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <div className=" overflow-x-auto">
              <table className="w-full whitespace-nowrap">
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

            {
                  orders&&orders.length > 0 ? 
                    (orders &&
                    orders.map((item) => (
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
                                ? "py-2 px-3 text-md focus:outline-none leading-none text-yellow-500 bg-yellow-100  rounded"
                                : "py-2 px-3 text-md focus:outline-none leading-none text-green-500 bg-green-100  rounded"
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
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                <line x1={16} y1={5} x2={19} y2={8} />
                              </svg>
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))
                  )
:(
<div class="ml-24">
                  <div class="m-4 h-10 p-4    bg-white flex justify-center content-center flex-wrap">
                    <p class="font-sans text-gray-900 text-2xl ">
                       Order Not Found
                    </p>
                  </div>
                </div>
 )
 }
                </tbody>

                
              </table>
            </div>
          </div>
        )}
        <Toaster />
      </div>
    </>
  );
};

export default MyOrder;
