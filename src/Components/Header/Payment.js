import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import CheckoutForm from "./CheckoutForm";
import Navbar from "./Navbar";


const Payment = () => {
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/v1/getStripeKey");
   
    setStripeApiKey(data.stripeKey);
  }

  useEffect(() => {
    getStripeApiKey();
  }, []);
  return (
    <>
    <Navbar/>
      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default Payment;
