import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../Header/Loader";
import Sidebar from "./Sidebar";
import {
  allReview,
 
  deleteReview,
  
} from "../Redux/Action/Product";
import {  clearErrors } from "../Redux/Action/User";
import {  useNavigate } from "react-router";


const Review = () => {
 
  const dispatch = useDispatch();
 
  const [productId, setProductId] = useState("");
  const { loading, error, reviews } = useSelector((state) => state.allReview);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteReview
  );

  const deleteUserHandler = (id) => {
    Swal.fire({
      title: "Do you want to delete ?",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deleteReview(id, productId));
      }
    });
  };
  const productReviewSubmit = (e) => {
    e.preventDefault();
  

    dispatch(allReview(productId));
  };
  useEffect(() => {
    if (productId.length === 24) {
      dispatch(allReview(productId));
    } 
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }
    if (isDeleted) {
      toast.success("Review delete successfully");
      dispatch({ type: "DELETE_REVIEW_RESET" });
     // window.location.href="/admin/reviews";
    
    }
  }, [dispatch, error, deleteError, productId, isDeleted]);

  return (
    <main className="bg-   h-screen overflow-hidden ">
      <div className="md:flex users-start justify-between">
        <div className=" md:w-2/12 md:pr-12   ">
          <Sidebar />
        </div>
        <div className="  w-full ml-0 md:ml-6 mt-mmt2  md:mt-20 md:px-6 h-28 md:space-y-4 ">
          <div className="  mt-14 md:mt-0 mx-2">
            <div className="   sm:rounded-lg">
              <form
                onSubmit={productReviewSubmit}
                class="lg:mr-auto flex justify-end pb-2"
              >
                <label for="topbar-search" class="sr-only">
                  Search
                </label>
                <div class="mt-2 relative lg:w-64">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      class="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter product id..."
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    id="topbar-search"
                    class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                  />
                </div>
              </form>

              {loading ? (
                <Loader />
              ) : (
                <div className="h-screen overflow-auto rounded shadow-sm border">
                  {reviews && reviews.length > 0 ? (
                    <table className="w-full text-sm overflow-x-auto text-left text-gray-500  dark:text-gray-400 mb-36">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            Review id
                          </th>
                          <th scope="col" className="px-6 py-3 ">
                            User
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Comment
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Ratting
                          </th>

                          <th scope="col" className="px-6 py-3">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {reviews &&
                          reviews.map((item, key) => (
                            <tr
                              key={key}
                              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            >
                              <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-start"
                              >
                                {item && item._id}
                              </th>
                              <td className="px-6 py-4">
                                {" "}
                                {item && item.name}
                              </td>
                              <td className="px-6 py-4">
                                {" "}
                                {item && item.comment}
                              </td>
                              <td
                                className={
                                  item && item.rating <= 2
                                    ? "px-6 py-4 text-red-500"
                                    : "px-6 py-4 text-green-500"
                                }
                              >
                                {item && item.rating}
                              </td>

                              <td className="px-6 py-4 text-left">
                                <button
                                  onClick={() =>
                                    deleteUserHandler(item && item._id)
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
                      </tbody>
                    </table>
                  ) : (
                    <div>
                      <div class="h-96  bg-white flex justify-center content-center flex-wrap">
                        <p class="font-sans text-gray-900 text-2xl ">
                          No Reviews Found
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </main>
  );
};

export default Review;
