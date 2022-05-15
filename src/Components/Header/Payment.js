import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";

import CheckoutForm from "./CheckoutForm";
import Navbar from "./Navbar";

const Payment = () => {
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get(
      "https://shrouded-falls-78834.herokuapp.com/v1/getStripeKey",
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
    );

    setStripeApiKey(data.stripeKey);
  }

  useEffect(() => {
    getStripeApiKey();
  }, []);
  return (
    <>
      <Navbar />
      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default Payment;
