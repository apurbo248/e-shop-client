import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { clearErrors, orderDetail } from "../Redux/Action/Order";
import Loader from "./Loader";
import Navbar from "./Navbar";

const OrderInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { error, loading, order } = useSelector((state) => state.orderDetail);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(orderDetail(id));
  }, [error, dispatch, id]);

  return (
    <div>
      <Navbar />

      {loading ? (
        <Loader />
      ) : (
        <div className="bg-gray-100 h-screen ">
          <p className="pt-24 px-5 text-2xl font-medium leading-none text-gray-700 mr-2">
            Order #{order && order._id}
          </p>
          <div className=" pt-8 flex flex-wrap sm:flex-no-wrap items-center justify-between w-full container">
            <div className="w-full py-1 sm:w-1/3 h-44 rounded-t sm:rounded-l sm:rounded-t-none border-r bg-white dark:bg-gray-800">
              <p className="py-2 px-5 text-md font-bold border-b leading-none text-gray-900 mr-2">
                Address
              </p>
              <p className="py-2 px-5 text-base font-sm leading-none text-gray-700 mr-2">
                {order.user && order.user.name}
              </p>
              <p className="py-2 px-5 text-base font-sm leading-none text-gray-700 mr-2">
                {order.user && order.user.email}
              </p>
              <p className="py-2 px-5 text-base font-sm leading-none text-gray-700 mr-2">
                {order.shippingInfo && order.shippingInfo.phone}
              </p>
              <p className="py-2 px-5 text-base font-sm leading-none text-gray-700 mr-2">
                {order.shippingInfo &&
                  ` ${order.shippingInfo.address},${order.shippingInfo.city},
                ${order.shippingInfo.country}`}
              </p>
            </div>
            <div className="w-full py-1 sm:w-1/3 md:h-44  bg-white dark:bg-gray-800 border-r">
              <p className="py-2 px-5 text-md font-bold border-b leading-none text-gray-900 mr-2">
                Payment
              </p>
              <p className="py-2 px-5  font-sm leading-none  mr-2">
                {order.paymentInfo &&
                order.paymentInfo.status === "succeeded" ? (
                  <p className="text-green-700 text-xl font-bold">
                    Payment Successful
                  </p>
                ) : (
                  <p className="text-red-700 text-xl font-bold">
                    Payment Unsuccessful
                  </p>
                )}
              </p>
              <p className="font-semibold py-2 px-5 text-base font-sm leading-none text-gray-700 mr-2">
                $ {order.totalPrice && order.totalPrice}
              </p>
            </div>
            <div className="w-full py-1 sm:w-1/3 md:h-44 rounded-b sm:rounded-b-none  bg-white dark:bg-gray-800">
              <p className="py-2 px-5 text-md font-bold border-b leading-none text-gray-900 mr-2">
                Order Status
              </p>
              <p className="py-2 px-5  font-sm leading-none  mr-2">
                {order && order.orderStatus === "Delivered" ? (
                  <p className="text-green-700 text-xl font-bold">
                    Your order have already delivered
                  </p>
                ) : (
                  <p className="text-gray-900 text-xl font-">
                    Order is{" "}
                    <span className="underline">
                      {order && order.orderStatus}
                    </span>{" "}
                    for delivery
                  </p>
                )}
              </p>
            </div>
          </div>
          <div className=" mt-4 flex items-center justify-between w-full container">
            <div className="flex flex-row  md:px-10  w-full items-center lg:items-center rounded bg-white ">
              <div className="justify-betweenw-full lg:w-2/3 h-64 dark:bg-gray-800">
                {order.orderItems &&
                  order.orderItems.map((item) => (
                    <div class="flex justify-between items-center mt-2 pt-6 ">
                      <div class="flex items-center">
                        <img src={item.image} width="60" 
                        class="rounded mr-4 md:h-10 md:w-10" />
                        <div class="flex flex-col mr-10">
                          {" "}
                          <span class="text-xs md:text-sm font-medium">
                            {item.name}
                          </span>{" "}
                        </div>
                      </div>
                      <div class="flex justify-center items-center">
                        <div class="md:pr-8 ">
                          <span class="text-xs md:text-sm font-medium">
                            ${item.price} x {item.quantity} ={" "}
                            {item.price * item.quantity}{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderInfo;
