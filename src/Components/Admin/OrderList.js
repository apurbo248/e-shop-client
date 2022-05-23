import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Sidebar from "./Sidebar";

import { clearErrors } from "../Redux/Action/Order";

import { allOrder, deleteOrder } from "../Redux/Action/Order";
import UpdateStatus from "./UpdateStatus";

const ProductList = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const { loading, error, orders } = useSelector((state) => state.allOrder);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.orders
  );

  const { error: updateError, isUpdated } = useSelector(
    (state) => state.orders
  );

  const deleteOrderHandler = (id) => {
    Swal.fire({
      title: "Do you want to delete ?",
      showDenyButton: true,

      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteOrder(id));
      }
    });
  };

  useEffect(() => {
    dispatch(allOrder());

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }
    if (isDeleted) {
      toast.success("Order delete successfully");
      dispatch({ type: "DELETE_ORDER_RESET" });
    }
    if (updateError) {
      toast.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Order updated successfully");
      dispatch({ type: "UPDATE_ORDER_RESET" });
      window.location.reload();
    }
  }, [dispatch, deleteError, isDeleted, error, updateError, isUpdated]);

  return (
    <div>
      <main className="bg-gray-100 dark:bg-gray-800  h-screen overflow-hidden ">
        <div className="md:flex items-start justify-between">
          <div className=" md:w-2/12 md:pr-12   ">
            <Sidebar />
          </div>

          <div className="  w-full  md:px-6 md:ml-4 mt-mmt2 md:mb- md:mt-24 md:space-y-4  ">
            <div className="overflow-auto h-screen  mt-16 pt- pb-4 md:mt-0 md:pt-0  px-1">
              <div className=" overflow-x-auto  shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  md:mb-20">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Order id
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Item Qty
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Amount
                      </th>
                      <th scope="col" className=" px-6 py-3 ">
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
                        {orders &&
                          orders.map((item, key) => (
                            <tr
                              key={key}
                              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            >
                              <th
                                scope="row"
                                className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                              >
                                {item && item._id}
                              </th>
                              <td className="px-6 py-2">
                                {" "}
                                {item && item.orderStatus === "Delivered" ? (
                                  <button className="p-1 bg-green-100 text-green-900 rounded">
                                    {item && item.orderStatus}
                                  </button>
                                ) : (
                                  <div>
                                    <button
                                      className="button    md:mt-0 p-1 font-semibold rounded text-mainBaseColor border-1 border-mainBaseColor"
                                      onClick={() => setOpen(true)}
                                    >
                                      <div className="flex text-mainBaseColor ">
                                        <p className="font-semibold">
                                          {item && item.orderStatus}
                                        </p>
                                      </div>
                                    </button>

                                    <Modal
                                      open={open}
                                      onClose={() => setOpen(false)}
                                    >
                                      <UpdateStatus id={item && item._id} />
                                    </Modal>
                                  </div>
                                )}
                              </td>
                              <td className="px-6 py-2">
                                {" "}
                                {item && item.orderItems.length}
                              </td>
                              <td className="px-6 py-2">
                                {item && item.totalPrice}
                              </td>
                              <td className="px- py-2 text-left">
                                <button
                                  onClick={() =>
                                    deleteOrderHandler(item && item._id)
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
                                    color="red"
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
    </div>
  );
};

export default ProductList;
