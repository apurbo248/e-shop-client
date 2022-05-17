import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { myOrders } from "../Redux/Action/Order";

import Navbar from "./Navbar";

const ConfirmOrder = ({ user }) => {
  const dispatch = useDispatch();
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);

  const { orders} = useSelector((state) => state.MyOrder);
  const navigate = useNavigate();
  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  console.log(orders);
  const shippingPrice = subTotal > 1000 ? 0 : 5;

  const tax = Math.round(subTotal * 0.05);

  const total = subTotal + tax + shippingPrice;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.country}`;

  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes();
  var dateTime = date + " " + time;

  const processToPay = () => {
    const data = {
      subTotal,
      shippingPrice,
      tax,
      total,
    };
    sessionStorage.setItem("orderInfo", JSON.stringify(data));
    navigate("/v1/process/payment");
  };
  useEffect(() => {
    
  });
  return (
    <>
      <Navbar />
      <div className="bg-gray-100">
        <div className=" pt-20 px-4 md:px-6 md:container  md:mx-auto ">
          <div className=" flex justify-start item-start space-y-2 flex-col ">
            <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
              Order
            </h1>
            <p className="text-base font-medium leading-6 text-gray-600">
              {dateTime}
            </p>
          </div>
          <div className="mt-1 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
            <div className="flex flex-col justify-start items-start w-full space-y-4 my-4 md:space-y- xl:space-y-">
              <div className="flex flex-col justify-start items-start bg-white shadow-md  px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                {cartItems &&
                  cartItems.map((item) => (
                    <div className="mt- md:mt- flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                      <div className="pb-3 md:pb- w-full md:w-10">
                        <img
                          className="md:w-full  md:block"
                          src={item.image}
                          alt="dress"
                        />
                      </div>
                      <div className=" md:flex-row flex-col flex justify-between items-start w-full  pb-4 space-y-4 md:space-y-0">
                        <div className="w-full flex flex-col justify-start items-start space-y-">
                          <h3 className="text-medium font- leading-6 text-gray-800">
                            <Link to={`/v1/product/${item.product}`}>
                              {item.name}
                            </Link>
                          </h3>
                        </div>

                        <div className="flex justify-between space-x-8 items-start w-full">
                          <p className=" text-medium leading-6">
                            {item.quantity} x {item.price}
                          </p>

                          <p className="text-medium  font-semibold leading-6 text-gray-800">
                            TK. {item.quantity * item.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                <div className="flex flex-col px-4 py- md:p-6 xl:p-8 w-full bg-white shadow-md space-y-6   ">
                  <h3 className="text-xl font-semibold leading-5 text-gray-800">
                    My Information
                  </h3>
                  <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                    <div className="flex flex-col justify-start items-start flex-shrink-0">
                      <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-1 border-b border-gray-200">
                        <img
                          className="h-20"
                          src="https://i.ibb.co/5TSg7f6/Rectangle-18.png"
                          alt="avatar"
                        />
                        <div className=" flex justify-start items-start flex-col space-y-2">
                          <p className="text-base font-semibold leading-4 text-left text-gray-800">
                            {user?.name}
                          </p>
                          <p className="text-sm leading-5 text-gray-600">
                            {user?.email}
                          </p>
                          <p className="text-sm leading-5 text-gray-600">
                            {shippingInfo?.phone}
                          </p>
                          <p className="text-sm leading-5 text-gray-600">
                            <span className="text-gray-900 font-semibold">
                              {" "}
                              {orders && orders.length}
                            </span>{" "}
                            Previous Orders
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between xl:h-full  items-stretch w-full flex-col  md:mt-0">
                      <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                        <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                          <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                            Shipping Address
                          </p>
                          <p className="w-48 lg:w-full xl:w-48 text-start md:text-left text-medium leading-5 text-gray-900">
                            {address}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md w-full xl:w-96 flex  items-center md:items-start px-4 py-4 md:p- xl:p- flex-col h-80">
              <h3 className="text-xl font-semibold leading-5 text-gray-800 ">
                Summary
              </h3>

              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-12 pt-10">
                <div className="flex justify-between  w-full">
                  <p className="text-base leading-4 text-gray-800">Subtotal</p>
                  <p className="text-base leading-4 text-gray-900">
                    TK. {subTotal}
                  </p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">Tax</p>
                  <p className="text-base leading-4 text-gray-900">TK. {tax}</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">Shipping</p>
                  <p className="text-base leading-4 text-gray-900">
                    TK. {shippingPrice}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full pt-4">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Total
                </p>
                <p className="text-base font-semibold leading-4 text-mainBaseColor">
                  TK. {total}
                </p>
              </div>
              <div>
                <button
                  onClick={processToPay}
                  class=" text-lg p-2 mt-3 w-full rounded bg-mainBaseColor font-semibold leading-5 text-white "
                >
                  Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmOrder;
