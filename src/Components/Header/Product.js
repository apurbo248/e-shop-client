import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Action/Cart";
import { toast } from "react-toastify";
import { Toaster } from "react-hot-toast";

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
 
  const addToCartHandler = (id) => {
    dispatch(addToCart(id, quantity));
    toast.success("Item added to cart");
  };
  return (
    <div key={product._id} className=" relative hover:shadow-lg bg-white">
      <Link to={`/v1/product/${product&&product._id}`}>
        <div className="w-full h-40 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none">
          <img
            src={product && product.image[0].url}
            alt=""
            className="w-full h-40 object-center object-cover lg:w-full lg:h-60"
          />
        </div>
      </Link>
      <div class="mt-4 pl-2 mb-2 flex justify-between ">
        <div>
          <Link to={`/v1/product/${product&&product._id}`}>
            <p class="text-md font-sm text-mainBaseColor mb-0">
              {product.name}
            </p>
          </Link>
          <div className="flex">
            <p class="text-sm font-medium text-gray-900 mt-1 ">
              <ReactStars
                value={product.ratings}
                edit={false}
                isHalf={true}
                size={14}
                collor="#ffd700"
                activeColor="#ffd700"
              />
            </p>
            <p class="text-sm md:ml-2 font- text-gray-900 mt-1 ">
              ({product.numberOfReview} review)
            </p>
          </div>
          {product.offer ? (
            <div className="flex">
              <p class="text-sm mt-2 font-medium text-lebelColor  md:pr-2 ">
                TK. {product.offer}
              </p>
              <p class="text-sm  font-medium text-gray-600 mt-2 line-through">
                TK. {product.price}
              </p>
              <p class=" ml-4  ">
                <button
                  className="flex ml-auto text-white   "
                  onClick={() => addToCartHandler(product._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#005c58"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-shopping-cart w-6 h-6 mt-2"
                  >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </button>
              </p>
            </div>
          ) : (
            <div className="flex">
              <p class="text-sm font-medium text-gray-900 mt-2 ">
                TK. {product.price}
              </p>
              <p class=" ml-4 ">
                <button
                  className="flex ml-auto text-white   "
                  onClick={() => addToCartHandler(product._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#005c58"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-shopping-cart w-6 h-6 mt-2"
                  >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Product;
