import { IdentificationIcon } from "@heroicons/react/outline";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductDetails, newReview } from "../Redux/Action/Product";
import ReactStars from "react-rating-stars-component";
import Loader from "./Loader";
import { addToCart } from "../Redux/Action/Cart";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";

const ProductDetails = ({ isAuthenticated }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, product } = useSelector(
    (state) => state.ProductDetails.product
  );

  console.log(product);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const increaseQty = () => {
    if (product?.stock <= quantity) {
      return;
    }

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQty = () => {
    if (1 >= quantity) {
      return;
    }

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addToCart(id, quantity));
    toast.success("Item added to cart");
  };

  const sendReview = () => {
    console.log(rating, comment);
    const reviewData = {
      rating: rating,
      comment: comment,
      productId: id,
    };
    dispatch(newReview(reviewData));
    toast.success("review added");
    // window.location.reload();
  };
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font overflow-hidden">
        {loading ? (
          <Loader />
        ) : (
          <div className="container px-5 pt-8 mx-auto border-b border-white pb-8 mt-20 ">
            <div className="lg:w-4/5 mx-auto flex flex-wrap ">
              <img
                alt="ecommerce"
                className="lg:w-96 w-64 lg:h-full h-64 object-cover object-center rounded"
                src={product && product.image[0].url}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {product && product.category}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product && product.name}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center ">
                    <ReactStars
                      value={product && product.ratings}
                      edit={false}
                      size={24}
                      collor="#ffd700"
                      activeColor="#ffd700"
                    />

                    <span className="ms-4 border-l-2 pl-4 border-gray-900">
                      {" "}
                      {product && product.numberOfReview}
                    </span>

                    <span className="text-gray-600 ml-1 border-r-2 pr-4 border-gray-900">
                      {" "}
                      Reviews
                    </span>
                    {isAuthenticated && (
                      <div>
                        {" "}
                        <button
                          type="button"
                          class=" text-dark ml-2 bg-gray-50  hover:bg-gray-200  p-1 rounded-md   font- cursor-pointer"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          write review
                        </button>
                        <div
                          class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                          id="exampleModal"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class=" modal-dialog relative w-auto pointer-events-none ">
                            <div class="p-4 pt-8 modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current ">
                              <div class="border-b modal- flex flex-shrink-0 items-center justify-between   rounded-t-md">
                                <h5
                                  class="font-semibold text-lg pl- "
                                  id="exampleModalLabel"
                                >
                                  Your opinion matters to us !
                                </h5>
                                <button
                                  type="button"
                                  class="btn-close box-content w-4 h-4 p-1 text-red-600 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>

                              <div className=" px-12">
                                <div className="mx- py-4">
                                  <select
                                    className="w-full  rounded-xl border  text-base outline-none text-gray-700 py-2 px-1 leading-8 "
                                    required
                                    name="rating"
                                    id="integration_city_id"
                                    onChange={(e) => setRating(e.target.value)}
                                  >
                                    <option value="">---Rating---</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                  </select>
                                </div>
                                <div className="md:flex flex-row md:space-x-4 w-full text-xs uppercase ">
                                  <div className="mb-3 space-y-4 w-full text-xs ">
                                    <textarea
                                      className="  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8"
                                      required="required"
                                      type="text"
                                      name="comment"
                                      placeholder="Leave a review"
                                      onChange={(e) =>
                                        setComment(e.target.value)
                                      }
                                      value={comment}
                                    />
                                  </div>
                                </div>

                                <div class=" flex flex-shrink-0 flex-wrap items-center justify-end pb-8  ">
                                  <button
                                    onClick={() => sendReview()}
                                    type="submit"
                                    class="px-6
                            py-2.5
                            bg-mainBaseColor
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-md
                            
                            transition
                            duration-150
                            ease-in-out
                            ml-1"
                                  >
                                    Rate Now
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </span>
                </div>

                <p className="leading-tight text-justify">
                  {product && product.description}
                </p>

                <div className="flex mt-6 items-center   border-gray-100 mb-5">
                  <div className="flex ">
                    {product && product.stock < 1 ? (
                      <p className="bg-red-100 p-1 px-2 text-red-900 font-medium">
                        Stock Out
                      </p>
                    ) : (
                      <p className="bg-green-200 p-1 px-2 text-green-900 font-medium">
                        {product && product.stock} In Stock
                      </p>
                    )}
                  </div>

                  {product && product.stock < 1 ? (
                    ""
                  ) : (
                    <div className="px-10 ">
                      <div>
                        <button
                          onClick={() => decreaseQty()}
                          className="bg-mainBaseColor px-2 font-bold text-lg text-white"
                        >
                          -
                        </button>
                        <input
                          className="w-10 ps-2  "
                          value={quantity}
                          readOnly
                          type="number"
                        />
                        <button
                          onClick={() => increaseQty()}
                          className="bg-mainBaseColor px-2 font-bold text-lg text-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex ">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    TK.{product && product.price}
                  </span>

                  {product && product.stock < 1 ? (
                    ""
                  ) : (
                    <button
                      className="flex ml-auto text-white bg-mainBaseColor border-0 py-2 px-6 focus:outline-none rounded"
                      onClick={() => addToCartHandler()}
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        <div class="py-12 px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center container">
          <div class="flex flex-col justify-start items-start w-full space-y-3">
            <div class="flex justify-start items-start">
              <p class=" pb-4 text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 dark:text-white ">
                Reviews
              </p>
            </div>
            {product && product.reviews && product.reviews.length > 0 ? (
              product.reviews &&
              product.reviews.map((review) => (
                <div class="w-full flex justify-start items-start flex-col bg-gray-50 dark:bg-gray-800 py-2 px-4">
                  <div class="flex flex-col md:flex-row justify-between w-full">
                    <div class="flex flex-row justify-between items-start">
                      <div class=" flex justify-start items-center flex-row space-x-2">
                        <div>
                          <img
                            src="https://i.ibb.co/QcqyrVG/Mask-Group.png"
                            alt="girl-avatar"
                            className="h-8"
                          />
                        </div>
                        <div class="flex flex-col justify-start items-start space-y-2">
                          <p class="text-base font-medium leading-none text-gray-800 dark:text-white">
                            {review.name}
                          </p>
                          <p class="text-sm leading-none text-gray-600 dark:text-white">
                            <ReactStars
                              value={review.rating}
                              edit={false}
                              isHalf={true}
                              size={14}
                              collor="#ffd700"
                              activeColor="#ffd700"
                            />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="r mt-2 md:mt-0">
                      {" "}
                      {String(review.reviewCreatedAt).substr(0, 10)}
                    </div>
                  </div>
                  <div id="menu" class="md:block">
                    <p class="mt-1 text-base leading-normal text-gray-600 dark:text-white w-full md:w-9/12 xl:w-5/6">
                      {review.comment}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div class=" w-full flex justify-start items-start flex-col  dark:bg-gray-800 py-2 px-4">
                <div class="flex flex-col md:flex-row justify-between w-full">
                  <div class="flex flex-row justify-between items-start">
                    <div class=" flex justify-start items-center flex-row space-x-2">
                      <div class="flex flex-col justify-start items-start space-y-2">
                        <p class="text-base font-medium leading-none text-gray-800 dark:text-white">
                          No review for this product
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <Toaster />
      </section>
    </>
  );
};

export default ProductDetails;
