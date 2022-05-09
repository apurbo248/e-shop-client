import React, { useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../Header/Loader";
import Sidebar from "./Sidebar";
import {
  deleteProduct,
  getAdminProducts,
  getProducts,
} from "../Redux/Action/Product";
import { clearErrors } from "../Redux/Action/User";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.ProductsData
  );
  console.log(products);
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.products
  );

  const deleteProductHandler = (id) => {
    Swal.fire({
      title: "Do you want to delete ?",
      showDenyButton: true,

      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deleteProduct(id));
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
      //toast.success("Product delete successfully");
      dispatch({ type: "DELETE_PRODUCT_RESET" });
      //Navigate("/admin_dashboard")
    }

    dispatch(getAdminProducts());
  }, [dispatch, deleteError, isDeleted, error]);

  return (
    <main className="bg-gray-100 dark:bg-gray-800  h-screen overflow-hidden ">
      <div className="md:flex items-start justify-between">
        <div className=" md:w-2/12 md:pr-12   ">
          <Sidebar />
        </div>

        <div className="  w-full mt-mmt1  md:mt-24 md:ml-10 h-28 md:space-y-4 ">
          <div className="overflow-auto h-screen ">
            <div className=" overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product id
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Stock
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
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
                      {products &&
                        products.map((item, key) => (
                          <tr
                            key={key}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                              {item && item._id}
                            </th>
                            <td className="px-6 py-4"> {item && item.name}</td>
                            <td className="px-6 py-4"> {item && item.stock}</td>
                            <td className="px-6 py-4">
                              $ {item && item.price}
                            </td>
                            <td className="px- py-4 text-left">
                              <Link to={`/admin/product_update/${item._id}`}>
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
                                  deleteProductHandler(item && item._id)
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

export default ProductList;
