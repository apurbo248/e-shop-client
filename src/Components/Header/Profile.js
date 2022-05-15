import React  from "react";

import { Link } from "react-router-dom";
import img from "../img.jpg";

import Navbar from "./Navbar";

const Profile = ({user}) => {
console.log(user)
console.log(localStorage.getItem("userToken"));
  return (
    <>
      <Navbar />
      <section class="text-gray-600 body-font md:mt-8 overflow-hidden">
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
      </section>
    </>
  );
};

export default Profile;
