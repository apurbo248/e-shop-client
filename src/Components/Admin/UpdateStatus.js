import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { clearErrors, orderDetail, updateOrder } from "../Redux/Action/Order";
import Sidebar from "./Sidebar";

const UpdateStatus = ({id}) => {
  const navigate = useNavigate();
 
  //const { id } = useParams();
  const dispatch = useDispatch();
  const [status, setOrderStatus] = useState("");
  const { error, loading, order } = useSelector((state) => state.orderDetail);
  console.log(id);
  const { error: updateError, isUpdated } = useSelector(
    (state) => state.orders
  );

  const handleValue = (e) => {
    const newProduct = { ...status };
    newProduct[e.target.name] = e.target.value;
    setOrderStatus(newProduct);
    console.log(newProduct);
  };
  const orderStatusHandler = (e) => {
    const st = status;

    dispatch(updateOrder(id, st));
    console.log(id);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (updateError) {
      toast.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      dispatch({ type: "UPDATE_ORDER_RESET" });
      navigate("/admin/orders");
      toast.success("Order status updated successfully");
    }
    dispatch(orderDetail(id));
  }, [error, dispatch, id, updateError, isUpdated]);
  return (
  
    
        <div className=" w-full  bg-white   rounded">
          <div className="relative p-4 ">
            <h1>
              Update order status for{" "}
              <span className="font-bold"> #{order && order._id}</span>
            </h1>
            <div className="  p-4">
              <label
                htmlFor="name"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              ></label>
              <select
                name="status"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                onChange={handleValue}
              >
                <option value=""> ---Select--- </option>
                {order && order.orderStatus === "Processing" && (
                  <option value="Shipped">Shipped</option>
                )}
                {order && order.orderStatus === "Shipped" && (
                  <option value="Delivered">Delivered</option>
                )}
              </select>
            </div>
            <div className=" flex flex-shrink-0 flex-wrap items-center justify-end pr-8 ">
              <button
                disabled={status === "" ? true : false}
                onClick={() => orderStatusHandler()}
                type="submit"
                className="px-6
                                              py-2.5
                                              bg-mainBaseColor
                                              text-white
                                              font-medium
                                              text-xs
                                              leading-tight
                                              uppercase
                                              rounded
                                              shadow-md

                                              active:bg-blue-800 active:shadow-lg
                                              transition
                                              duration-150
                                              ease-in-out
                                              ml-1"
              >
                update
              </button>
            </div>
          </div>
        </div>
     
  );
};

export default UpdateStatus;
