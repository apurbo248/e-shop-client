import React, { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, logout } from "../Redux/Action/User";
import { toast } from "react-hot-toast";
import Search from "./Search";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { isAuthenticated, user } = useSelector((state) => state.userInfo);

  console.log(user);

  const logoutHandler = async () => {
    localStorage.removeItem("userToken");
    toast.success("Logout successfully");
    window.location.href = "/";
  };

  useEffect(() => {}, [dispatch]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Disclosure as="nav" className="bg-black fixed top-0 left-0   right-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className=" flex-1 flex pl-12 md:items-center  md:justify-center sm:items-stretch sm:justify-start">
                <div className="text-white  flex-shrink-0 flex items-center text-lg md:text-3xl mr-2">
                  <Link to="/">
                    <h2>e-SHOP</h2>
                  </Link>
                </div>
                <div className=" ">
                  <Search />
                </div>

                <div className="hidden sm:block sm:ml-6 mx-auto">
                  <div className="flex space-x-4">
                    {isAuthenticated && user && user.role === "admin" ? (
                      <div>
                        <Link to="/admin_dashboard">
                          <a className=" text-white px-3 py-2 rounded-md text-sm font-medium">
                            Dashboard
                          </a>
                        </Link>
                        <Link to="/v1/products">
                          <a className=" text-white px-3 py-2 rounded-md text-sm font-medium">
                            Products
                          </a>
                        </Link>
                      </div>
                    ) : (
                      <Link to="/v1/products">
                        <a className=" text-white px-3 py-2 rounded-md text-sm font-medium">
                          Products
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center  -mr- sm:static sm:inset-auto  sm:pr-0">
                <Link to="/v1/cart">
                  <div class="">
                    <div class="flex  justify-center">
                      <div class="relative ">
                        <div class="flex flex-row cursor-pointer truncate p-2 px-2  rounded">
                          <div class="flex flex-row-reverse ml- w-full">
                            <div slot="icon" class="relative">
                              <div class="absolute text-xs rounded-full -mt-1 -mr-2 px-1 font-bold top-0 right-0 bg-red-700 text-white">
                                {cartItems.length}
                              </div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#fff"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-shopping-cart w-6 h-6 mt-2"
                              >
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                {isAuthenticated && user ? (
                  <Menu as="div" className="ml- relative">
                    <div>
                      <Menu.Button className=" flex text-lg text-white ">
                        <span className="sr-only">Open user menu</span>
                        <p className=" ">{user.name}</p>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link to="/me">
                              <a
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Profile
                              </a>
                            </Link>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => logoutHandler()}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <div className="mr-2">
                    <Link to="/v1/user/login">
                      <a className="md:bg-mainBaseColor md:mx-2 text-white md:px-3 md:py-2 rounded-md text-sm font-medium">
                        Sign in
                      </a>
                    </Link>
                    <span className="text-white inline-block md:hidden">/</span>
                    <Link to="/v1/user/register">
                      <a className="md:bg-mainBaseColor text-white md:px-3 md:py-2 rounded-md text-sm font-medium">
                        Sign up
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 flex">
              <Disclosure.Button>
                <Link to="/admin_dashboard">
                  <a className=" text-white px-3 py-2 rounded-md text-sm font-medium">
                    Dashboard
                  </a>
                </Link>
                <Link to="/v1/products">
                  <a className=" text-white px-3 py-2 rounded-md text-sm font-medium">
                    Products
                  </a>
                </Link>
                {/* <div className="w-full px-4">
                  <Search />
                </div> */}
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
