import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../Redux/Action/Cart";
import toast from "react-hot-toast";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  const increaseQty = (id, quantity, stock) => {
    const newQty = quantity + 1;

    if (stock <= quantity) {
      toast.error("Don't have more product");
      return;
    }
    dispatch(addToCart(id, newQty));
  };

  const decreaseQty = (id, quantity) => {
    const newQty = quantity - 1;

    if (1 >= quantity) {
      return;
    }

    dispatch(addToCart(id, newQty));
  };

  const checkoutHandler = () => {
    navigate("/shipping");
  };

  const deleteItem = (id) => {
    dispatch(removeToCart(id));
  };
  return (
    <>
      <Navbar />

      {cartItems?.length === 0 ? (
        <div class="h-screen   flex justify-center content-center flex-wrap md:mt-24 bg-gray-100">
          <div class="shadow-lg rounded-2xl p-2 mx-2 bg-white dark:bg-gray-900 md:w-1/3 m-auto relative">
            <div class="w-full h-full text-center">
              <div class="flex h-full flex-col justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="mt-4 w-20 h-20 m-auto text-gray-400 dark:text-white"
                  viewBox="0 0 2048 1792"
                >
                  <path d="M1920 768q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5h-15l-115 662q-8 46-44 76t-82 30h-1280q-46 0-82-30t-44-76l-115-662h-15q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5h1792zm-1435 800q26-2 43.5-22.5t15.5-46.5l-32-416q-2-26-22.5-43.5t-46.5-15.5-43.5 22.5-15.5 46.5l32 416q2 25 20.5 42t43.5 17h5zm411-64v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm384 0v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm352 5l32-416q2-26-15.5-46.5t-43.5-22.5-46.5 15.5-22.5 43.5l-32 416q-2 26 15.5 46.5t43.5 22.5h5q25 0 43.5-17t20.5-42zm-1156-1217l-93 412h-132l101-441q19-88 89-143.5t160-55.5h167q0-26 19-45t45-19h384q26 0 45 19t19 45h167q90 0 160 55.5t89 143.5l101 441h-132l-93-412q-11-44-45.5-72t-79.5-28h-167q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45h-167q-45 0-79.5 28t-45.5 72z"></path>
                </svg>

                <p class="text-gray-900 dark:text-white text-2xl mt-4 font-semibold">
                  YOUR BAG FEELS VERY LIGHT
                </p>
                <p class="dark:text-gray-50 text-gray-800 text-md font-thin py-2 px-6">
                  THERE IS NOTHING IN YOUR BAG.LET'S ADD SOME ITEMS
                </p>
                <Link to="/v1/products">
                  <button class="dark:text-gray-50 text-white text-lg font-bold py-2 px-6 bg-mainBaseColor rounded">
                    Add Item
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div class="h-screen bg-gray-100">
            <div class=" container w-full pt-20  mx-auto    md:max-w-5xl">
              <div class="col-span-3 md:p-4 p-2 bg-white rounded-lg">
                <h1 class=" pb-4 text-2xl font-medium ">Shopping Cart</h1>
                {cartItems &&
                  cartItems.map((item) => (
                    <div class="flex justify-between items-center py-2">
                      <div class="flex items-center">
                        <img src={item.image} width="60" class="rounded" />
                        <div class="flex flex-col ml-3">
                          {" "}
                          <span class="md:text-md font-medium">
                            {item?.name}
                          </span>{" "}
                        </div>
                      </div>
                      <div class="flex justify-center items-center">
                        <div class="pr-4 flex ">
                          {" "}
                          <button
                            class="font-medium text-lg"
                            onClick={() =>
                              decreaseQty(item.product, item.quantity)
                            }
                          >
                            -
                          </button>
                          <input
                            type="text"
                            class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
                            value={item.quantity}
                            readOnly
                          />
                          <button
                            class="font-medium text-lg"
                            onClick={() =>
                              increaseQty(
                                item.product,
                                item.quantity,
                                item.stock
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                        <div class=" pr-4 md:pr-8 ">
                          <span class=" font-medium">${item.price}</span>
                        </div>
                        <div class="md:pr-8 ">
                          <button
                            class="text-xs font-medium"
                            onClick={() => deleteItem(item.product)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-red-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                        <div>
                          {" "}
                          <i class="fa fa-close text-xs font-medium"></i>{" "}
                        </div>
                      </div>
                    </div>
                  ))}

                <div class="flex justify-between items-center mt-6 pt-6 border-t">
                  <div class="flex items-center">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    <Link to="/v1/products">
                      <span class="pl-2 text-md font-medium text-gray-900">
                        Shop more
                      </span>{" "}
                    </Link>
                  </div>
                  <div class="flex justify-center items-center mr-8 ">
                    {" "}
                    <span class="text-sm font-medium text-gray-600 mr-1">
                      Subtotal:
                    </span>{" "}
                    <span class="text-lg font-bold text-mainBaseColor ">
                      {" "}
                      {`TK. ${cartItems.reduce(
                        (acc, item) => acc + item.quantity * item.price,
                        0
                      )}`}
                    </span>{" "}
                  </div>
                </div>
              </div>

              <button
                onClick={() => checkoutHandler()}
                class="mr-10 flex ml-auto text-white bg-mainBaseColor border-0 py-2 px-7 focus:outline-none rounded"
              >
                Check Out
              </button>
            </div>
          </div>
        </>
      )}

      <Footer />
    </>
  );
};

export default Cart;
