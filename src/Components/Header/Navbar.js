import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import { Link, NavLink, useNavigate } from "react-router-dom";
import img from "../Images/nav.png";
import Cart from "./Cart";

import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Action/User";
import { toast, Toaster } from "react-hot-toast";
import Search from "./Search";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { error, isAuthenticated, user } = useSelector(
    (state) => state.userInfo
  );
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
                  <h2>e-SHOP</h2>
                </div>
                <div className="hidden sm:block sm:ml-6 mx-auto">
                  <div className="flex space-x-4">
                    {isAuthenticated && user && user.role === "admin" && (
                      <Link to="/admin_dashboard">
                        <a className=" text-white px-3 py-2 rounded-md text-sm font-medium">
                          Dashboard
                        </a>
                      </Link>
                    )}
                    <Link to="/v1/products">
                      <a className=" text-white px-3 py-2 rounded-md text-sm font-medium">
                        Products
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link to="/v1/cart">
                  <button
                    type="button"
                    className=" p-1 rounded-full text-gray-400 "
                  >
                    <a class="  text-xs text-gray-900  rounded-lg sm:mt-0  ">
                      <span class="badge -mb-4 bg-mainBaseColor rounded-full  text-center  text-white text-sm mr-2 mt-2 ">
                        {cartItems.length}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 -ml-4 "
                        viewBox="0 0 20 20"
                        fill="#fff"
                      >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                    </a>
                  </button>
                </Link>
                {isAuthenticated ? (
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
    // <nav
    //   className="
    //   fixed

    //   w-full
    //   flex flex-wrap
    //   items-center
    //   justify-between
    //   py-2
    //   bg-white
    //   text-gray-500
    //   hover:text-gray-700
    //   focus:text-gray-700
    //   navbar navbar-expand-lg navbar-light
    //   max-w-96
    //   border-b
    //   top-0
    //   "
    // >
    //   <div className="container w-full flex flex-wrap items-center justify-between px-6 z-20">
    //     <button
    //       className="

    //   navbar-toggler
    //   text-gray-500
    //   border-0
    //   hover:shadow-none hover:no-underline
    //   py-2
    //   px-2.5
    //   bg-transparent
    //   focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    // "
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <svg
    //         aria-hidden="true"
    //         focusable="false"
    //         data-prefix="fas"
    //         data-icon="bars"
    //         className="w-6"
    //         role="img"
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 448 512"
    //       >
    //         <path
    //           fill="currentColor"
    //           d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
    //         ></path>
    //       </svg>
    //     </button>
    //     <div
    //       className="collapse navbar-collapse flex-grow items-center"
    //       id="navbarSupportedContent"
    //     >
    //       <a
    //         className="
    //     flex
    //     items-center
    //     text-gray-900
    //     hover:text-gray-900
    //     focus:text-gray-900
    //     mt-2
    //     lg:mt-0
    //     mr-1
    //   "
    //         href="#"
    //       >
    //         <img
    //           src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
    //           style={{ height: "15px" }}
    //           alt=""
    //           loading="lazy"
    //         />
    //       </a>
    //       <Search />
    //       <ul className="navbar-nav flex flex-col pl-0 list-style-none m-auto">
    //         <li className="nav-item p-2">
    //           <Link to="/home">
    //             <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 font-semibold">
    //               Home
    //             </a>
    //           </Link>
    //         </li>
    //         <li className="nav-item p-2">
    //           <Link to="/v1/products">
    //             <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 font-semibold">
    //               Product
    //             </a>
    //           </Link>
    //         </li>
    //         <li className="nav-item p-2">
    //           {isAuthenticated && user.role === "admin" ? (
    //             <Link to="/admin_dashboard">
    //               <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 font-semibold">
    //                 Admin Dashboard
    //               </a>
    //             </Link>
    //           ) : (
    //             ""
    //           )}
    //         </li>
    //       </ul>
    //     </div>

    //     <div className="flex items-center relative">
    //       <Link to="/v1/cart">
    //         <a
    //           className="
    //               text-gray-500
    //               hover:text-gray-700
    //               focus:text-gray-700
    //               mr-4

    //               flex items-center
    //             "
    //         >
    //           <svg
    //             aria-hidden="true"
    //             focusable="false"
    //             data-prefix="fas"
    //             data-icon="shopping-cart"
    //             className="w-6"
    //             role="img"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 576 512"
    //           >
    //             <path
    //               fill="currentColor"
    //               d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
    //             ></path>
    //           </svg>
    //           <span className="text-white bg-red-600 absolute rounded-full text-xs -mt-3 ml-4 py-1 p-2">
    //             {cartItems.length}
    //           </span>
    //         </a>
    //       </Link>

    //       {isAuthenticated ? (
    //         <div className="container z-50">
    //           <div className="dropdown">
    //             <div className="profile">
    //               <img
    //                 className="dropbtn"
    //                 src="https://i.imgur.com/ywRonqz.jpg"
    //               />
    //               <div className="dropdown-contents">
    //                 <ul>
    //                   <Link to="/me">
    //                     <li>
    //                       <i className="bx bx-cog"></i>
    //                       <span>Profile</span>
    //                     </li>
    //                   </Link>

    //                   <li>
    //                     <i className="bx bx-log-in-circle"></i>
    //                     <button onClick={() => logoutHandler()}>Logout</button>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       ) : (
    //         <>
    //           <ul className="navbar-nav flex flex-col pl-0 list-style-none m-auto">
    //             <li className="nav-item p-2">
    //               <Link to="/v1/user/login">
    //                 <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 font-semibold">
    //                   Sign In
    //                 </a>
    //               </Link>
    //             </li>
    //             <li className="nav-item p-2">
    //               <Link to="/v1/user/register">
    //                 <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0 font-semibold">
    //                   Sign Up
    //                 </a>
    //               </Link>
    //             </li>
    //           </ul>
    //         </>
    //       )}
    //     </div>
    //   </div>
    //   <Toaster />
    // </nav>
  );
};

export default Navbar;
