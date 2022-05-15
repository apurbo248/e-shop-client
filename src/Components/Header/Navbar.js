import React, { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Action/User";
import { toast } from "react-hot-toast";
import Search from "./Search";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { error, isAuthenticated, user } = useSelector(
    (state) => state.userInfo
  );

console.log(user)
  const navigate = useNavigate();

  const logoutHandler = async () => {
    dispatch(logout());

    toast.success("Logout successfully");
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
                <div className="text-white  flex-shrink-0 flex items-center text-3xl">
                  <Link to="/home">
                    <h2>e-SHOP</h2>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6 mx-auto">
                  <div className="flex space-x-4">
                    {isAuthenticated && user.role === "admin" ? (
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
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link to="/v1/cart">
                  <button
                    type="button"
                    className=" p-1 rounded-full text-gray-400 "
                  >
                    <span class="badge  bg-mainBaseColor rounded-full  text-center  text-white text-xs mr-2  -mb- mt-2 ">
                      {cartItems.length}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 -ml-4 -mt-6"
                      viewBox="0 0 20 20"
                      fill="#fff"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                  </button>
                </Link>
                {isAuthenticated && user? (
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
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
                  <div>
                    <Link to="/v1/user/login">
                      <a className="bg-mainBaseColor mx-2 text-white px-3 py-2 rounded-md text-sm font-medium">
                        Sign in
                      </a>
                    </Link>
                    <Link to="/v1/user/register">
                      <a className="bg-mainBaseColor text-white px-3 py-2 rounded-md text-sm font-medium">
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
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
