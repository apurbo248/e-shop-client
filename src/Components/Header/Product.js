import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import img from "../img.jpg";

const option = {
  edit: false,
  color: "rgb(20,20,20,0.1)",
  activeColor: "#ffd700",
  value: 5,
};
const Product = ({ product }) => {
  return (
    <div key={product._id} className="group relative hover:shadow-lg bg-white">
      <Link to={`/v1/product/${product._id}`}>
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
          <Link to={`/v1/product/${product._id}`}>
            <p class="text-md font-sm text-mainBaseColor mb-0">
              {product.name}
            </p>
          </Link>

          {product.offer ? (
            <div className="flex">
              <p class="text-lg font-medium text-lebelColor  md:pr-4 ">
                TK. {product.offer}
              </p>
              <p class="text-sm font-medium text-gray-900 mt-1 line-through">
                TK. {product.price}
              </p>
            </div>
          ) : (
            <div>
              <p class="text-lg font-medium  text-lebelColor  md:pr-4 ">
                TK. {product.price}
              </p>
            </div>
          )}
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
        </div>
      </div>
    </div>
  );
};

export default Product;
