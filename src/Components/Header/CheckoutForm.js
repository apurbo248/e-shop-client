import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { newOrder } from "../Redux/Action/Order";
import Navbar from "./Navbar";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.userInfo);
  const { error, clearErrors } = useSelector((state) => state.order);


  const paymentData = {
    amount: Math.round(orderInfo && orderInfo.total * 100),
  };

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemPrice: orderInfo && orderInfo.subTotal,
    taxPrice: orderInfo && orderInfo.tax,
    shippingPrice: orderInfo && orderInfo.shippingPrice,
    totalPrice: orderInfo && orderInfo.total,
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      };
      const { data } = await axios.post(
        "https://shrouded-falls-78834.herokuapp.com/v1/payment",

        paymentData,
        config
      );

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: user.name,
            email: user.email,
            phone: shippingInfo.phone,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              country: shippingInfo.country,
              state: shippingInfo.state,
            },
          },
        },
      });

      if (result.error) {
        console(result.error);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };
          setLoading(false);
          dispatch(newOrder(order));
          localStorage.setItem("cartItems", "");
          sessionStorage.removeItem("shippingInfo");
          navigate("/success");
          toast.success("Successfully payment");
        } else {
          alert("There is some issue while processing payment...");
        }
      }
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors);
    }
  }, [dispatch, error, clearErrors]);

  return (
    <>
      <Navbar />
      <div className="h-screen flex align-center justify-center bg-gray-100">
        <div className="mt-40 md:mx-24   rounded w-full mx-2 md:w-1/3">
          <form onSubmit={submitHandler} className="md:p-8 p-4 bg-white rounded shadow-sm">
            <span className="text-gray-400">* 4242 4242 4242 4242</span>
            <CardElement />
            <button
              disabled={!stripe || !elements}
              className="mt-12 w ml-auto text-white bg-mainBaseColor border-0 py-2 px-6 focus:outline-none rounded"
            >
              {loading ? (
                <div className="spinner text-white" id="spinner"></div>
              ) : (
                <div>Pay {orderInfo && orderInfo.total}</div>
              )}
            </button>
          </form>
          <Toaster />
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
