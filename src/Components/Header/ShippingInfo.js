import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Country, State } from "country-state-city";
import toast from "react-hot-toast";
import { saveShippingInfo } from "../Redux/Action/Cart";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";

const ShippingInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shippingInfo } = useSelector((state) => state.cart);
  console.log(shippingInfo);
  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.address);
  const [state, setState] = useState(shippingInfo.state);
  const [country, setCountry] = useState(shippingInfo.country);
  const [phone, setPhone] = useState(shippingInfo.phone);

  console.log(address, city, state, country, phone);

  const shoppingInfoHandler = () => {
    if (phone.length < 11 || phone.length > 11) {
      toast.error("Phone number should be 11 digit");
      return;
    }

    dispatch(saveShippingInfo({ address, city, state, country, phone }));
    navigate("/v1/user/order/confirm");
    console.log({ address, city, state, country, phone });
  };
  return (
    <>
      <Navbar />
      <div class="flex   mt-24">
        <div class="m-auto ">
          <div>
            <div class=" bg-white rounded-lg ">
              <div class="flex">
                <div class="flex-1 py-5 pl-5 overflow-hidden">
                  <h1 class="inline text-xl  font-medium leading-none">
                    Shipping Information
                  </h1>
                </div>
              </div>
              <div class="px-5 pb-4">
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />

                <div class="flex">
                  <div class="flex-grow w-1/4 pr-2">
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="City"
                      class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    />
                  </div>
                  <div class="flex-grow">
                    <input
                      max="11"
                      type="number"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone no"
                      class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    />
                  </div>
                </div>
                <select
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                >
                  <option value="">Country</option>

                  {Country &&
                    Country.getAllCountries().map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {" "}
                        {item.name}
                      </option>
                    ))}
                </select>

                {country && (
                  <select
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  >
                    <option value="">State</option>

                    {State &&
                      State.getStatesOfCountry(country).map((item) => (
                        <option key={item.isoCode} value={item.isoCode}>
                          {" "}
                          {item.name}
                        </option>
                      ))}
                  </select>
                )}
              </div>

             
              <div class="flex flex-row-reverse p-3">
                <div class="flex-initial mr-10">
                  <button
                    onClick={() => shoppingInfoHandler()}
                    class="flex ml-auto text-white bg-mainBaseColor  py-2 px-6 focus:outline-none rounded"
                    disabled={address && city && phone && state ? false : true}
                  >
                    <span class="pl-2 mx-1">Continue</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingInfo;
