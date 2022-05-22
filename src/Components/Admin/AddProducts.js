import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";

import { clearErrors, createProduct } from "../Redux/Action/Product";
import { useNavigate } from "react-router";
import { toast, Toaster } from "react-hot-toast";

const AddProducts = () => {
  const { handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { success, error } = useSelector((state) => state.addProduct);

  const [imageLoading, setImageLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    offer: 0,
    price: "",
    stock: 0,
  });
  
  const handleValue = (e) => {
    const newProduct = { ...product };
    newProduct[e.target.name] = e.target.value;
    setProduct(newProduct);
    console.log(product)
  };

  const uploadImage = async (e) => {
    setImageLoading(true);
    const imageData = new FormData();
    imageData.set("key", "c9e7c4b6f1a9856f03990d5024785ae5");
    imageData.append("image", e.target.files[0]);
    await axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImage(response.data.data.display_url);
        setImageLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = async (e) => {
 

    const productData = {
      name: product.name,
      description: product.description,
      category: product.category,
      price: product.price,
      stock: product.stock,
      offer: product.offer,
      image: {
        url: image,
      },
    };
    dispatch(createProduct(productData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      toast.success("Product added successfully.");
      dispatch({ type: "NEW_PRODUCT_RESET" });

      setProduct({
        name: " ",
        description: " ",
        category: " ",
        offer: 0,
        price: " ",
        stock: 0,
      });
      setImage(null);
    }
  }, [dispatch, error, success, navigate]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      class="flex flex-col flex-wrap sm:flex-row md:p-4 "
    >
      <div class=" relative  pointer-events-none ">
        <div
          //
          class=" md:pt-8  border-none  relative flex flex-col w-full overflow-x- height pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
        >
          <div class=" flex flex-shrink-0 items-center justify-between  border-b border-gray-200 rounded-t-md">
            <h5 class="font-semibold text-lg  " id="exampleModalLabel">
              Add Product
            </h5>
          </div>

          <div className="md:space-y-2  ">
            <div className="flex flex-col md:flex-row items-center py-6">
              <label className="cursor-pointer pb-4 md:pb-0">
                <input
                  type="file"
                  required
                  name="image"
                  onChange={uploadImage}
                  className=""
                />
              </label>

              {image ? (
                <>
                  {imageLoading ? (
                    <div class=" items-center justify-center">
                      <button
                        type="button"
                        class="flex items-center rounded-lg bg-green px-4 py-2 text-green-800"
                        disabled
                      >
                        <svg
                          class="mr-3 h-5 w-5 animate-spin text-green-800"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span class="font-medium text-mainBaseColor">
                          {" "}
                          Take a deep breath... &#127804;
                        </span>
                      </button>
                    </div>
                  ) : (
                    <div class="rounded-xl overflow-hidden    shadow hover:shadow-md max-w-full bg-white cursor-pointer h-28">
                      <div class="  w-full p-1">
                        <img
                          alt="You will see your choosed pictures here"
                          src={image && image}
                          class="rounded-xl object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  )}{" "}
                </>
              ) : (
                <div class="rounded-xl overflow-hidden flex shadow hover:shadow-md max-w-full bg-white cursor-pointer h-28">
                  <div class="w-2/2  text-text1  justify-center"></div>

                  <div class="lg:  w-full p-1">
                    <img
                      alt="You will see your choosed pictures here"
                      src={image && image}
                      class="rounded-xl object-cover w-full h-full"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col md:space-x-4 w-full text-xs uppercase te">
            <div className="mb-3 space-y-2 w-full text-xs ">
              <label className="font-semibold text-allTextColor  text-sm">
                Product name
              </label>
              <input
                className="  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8"
                required
                type="text"
                name="name"
                onChange={handleValue}
                defaultValue={product && product.name}
              />
            </div>
            <div className="flex flex-row md:space-x-2 w-full text-xs uppercase ">
              <div className="mb-3 space-y-2 w-full text-xs ">
                <label className="font-semibold text-allTextColor  text-sm">
                  Category
                </label>
                <select
                  className="  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8"
                  required
                  type="text"
                  name="category"
                  onChange={handleValue}
                >
                  <option value="">---Category---</option>
                  <option value="cloth">Cloth</option>
                  <option value="book">Book</option>
                  <option value="electronic">Electronic</option>
                  <option value="footware">Footware</option>
                  <option value="groceryandfood">GroceryAndFood</option>
                  <option value="cosmetics">Cosmetics</option>
                  <option value="smartphone">SmartPhone</option>
                </select>
              </div>
              <div className="mb-3 space-y-2 2/5 md:w- text-xs ">
                <label className="font-semibold text-allTextColor  text-sm">
                  Stock
                </label>
                <input
                  className="  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8"
                  required
                  type="number"
                  name="stock"
                  onChange={handleValue}
                />
              </div>
            </div>
            <div className="flex flex-row md:space-x-4 w-full text-xs uppercase te">
              <div className="mb-3 space-y-2 w-full text-xs ">
                <label className="font-semibold text-allTextColor  text-sm">
                  Price
                </label>
                <input
                  className="  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8"
                  required
                  type="number"
                  name="price"
                  onChange={handleValue}
                />
              </div>
              <div className="mb-3 space-y-2 w-full text-xs ">
                <label className="font-semibold text-allTextColor  text-sm">
                  Offer Price
                </label>
                <input
                  className="  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8"
                  required
                  type="number"
                  name="offer"
                  onChange={handleValue}
                />
              </div>
            </div>
            <div className="flex md:flex-col md:space-x-4 w-full text-xs uppercase te">
              <div className="mb-3 space-y-2 w-full text-xs ">
                <label className="font-semibold text-allTextColor  text-sm">
                  Description
                </label>
                <textarea
                  className="  w-full  rounded-xl border  text-base outline-none text-gray-700 py-1 px-3 leading-8"
                  required
                  type="text"
                  name="description"
                  onChange={handleValue}
                />
              </div>
            </div>
          </div>
          <button
          
            type="submit"
            class="px-28
      py-2.5
      bg-mainBaseColor
      text-white
      font-medium
      text-lg
      leading-tight
      uppercase
      rounded
      shadow-md

      transition
      duration-150
      ease-in-out
      ml-1"
          >
            add
          </button>
        </div>

        <Toaster />
      </div>
    </form>
  );
};

export default AddProducts;
