import React, { useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "./Sidebar";

import { allUser, clearErrors, deleteUser } from "../Redux/Action/User";

import { Link } from "react-router-dom";

const AdminUserList = () => {
  const { handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { loading, error, users } = useSelector((state) => state.allUserInfo);
  console.log(users);
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.products
  );

  const deleteUserHandler = (id) => {
    Swal.fire({
      title: "Do you want to delete ?",
      showDenyButton: true,

      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deleteUser(id));
        window.location.reload();
      }
    });
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }
    if (isDeleted) {
      toast.success("User delete successfully");
      dispatch({ type: "DELETE_USER_RESET" });
    }

    dispatch(allUser());
  }, [dispatch, deleteError, isDeleted, error]);

  return (
   <main className="bg-gray-100 dark:bg-gray-800  h-screen overflow-hidden ">
      <div className="md:flex users-start justify-between">
        <div className=" md:w-2/12    ">
          <Sidebar />
        </div>
        <div className="  w-full  md:px-6 md:ml-4 mt-mmt2 md:mb-20 md:mt-24 md:space-y-4  ">
          <div className="overflow-auto h-screen  mt-20 pt-16  pb-4 md:mt-0 md:pt-0 md:pb-4 px-1">
            <div className=" overflow-x-auto  shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      User id
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                     <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Role
                    </th>
                    <th scope="col" className=" py-3">
                      <span className=""></span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <div className="animate-pulse">
                      <div className="h-4 bg-gray-200 mt-3 mb-6 rounded"></div>
                      <div className="h-4 bg-gray-300 mb-6 rounded"></div>
                      <div className="h-4 bg-gray-200 mb-6 rounded"></div>
                      <div className="h-4 bg-gray-300 mb-6 rounded"></div>
                      <div className="h-4 bg-gray-200 mb-6 rounded"></div>
                    </div>
                  ) : (
                    <>
                      {users &&
                        users.map((user, key) => (
                          <tr
                            key={key}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                              {user && user._id}
                            </th>
                            <td className="px-6 py-4"> {user && user.name}</td>
                            <td className="px-6 py-4"> {user && user.email}</td>
                            <td className="px-6 py-4">
                              <p
                                className={
                                  user && user.role === "admin"
                                    ? "pl-12 py-1 rounded bg-green-100 text-green-700 text-md"
                                    : "pl-12 py-1 rounded bg-yellow-100 text-yellow-700 text-md"
                                }
                              >
                                {user && user.role}
                              </p>
                            </td>
                            <td className="px- py-4 text-left">
                              <Link to={`/admin/user_update/${user._id}`}>
                                <button className=" pr-4 font-sm text-gray-600  hover:underline">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                    />
                                  </svg>
                                </button>
                              </Link>
                              <button
                                onClick={() =>
                                  deleteUserHandler(user && user._id)
                                }
                                className="font-sm text-gray-600  hover:underline"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        ))}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminUserList;
