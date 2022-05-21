import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Pagination from "react-js-pagination";
import Slider from "@mui/material/Slider";
import { getProducts } from "../Redux/Action/Product";

import Navbar from "./Navbar";
import Product from "./Product";

const AllProductpage = () => {
  const { keyword } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 5000]);
  const dispatch = useDispatch();
  const { productPerPage, productCount, loading, products } = useSelector(
    (state) => state.ProductsData
  );
console.log(products);
  const setCurrentPageHandler = (e) => {
    setCurrentPage(e);
  };
  const priceHandler = (e, newPrice) => {
    setPrice(newPrice);
  };
  useEffect(() => {
    dispatch(getProducts(keyword, currentPage, price));
  }, [dispatch, keyword, currentPage, price]);

  return (
    <>
      <Navbar />
      <section className="pt-20 pb-2 bg-gray-100">
        <div className=" container ">
          <div className="bg- w-full rounded  mt-2 grid grid-cols-1 gap-y-10 gap-x- sm:grid-cols-1 md:grid-cols-5 md:container rounded">
            <div className="group relative hover:shadow-lg bg-white md:shadow-sm">
              <p className="pl-4 text-gray-900 text-lg">Sort By</p>
              <hr/>
              <div class="mt-2 mb-2 px-8 ">
                <p className="pl-"> Price</p>
                <div>
                  <Slider
                    value={price}
                    onChange={priceHandler}
                    valueLabelDisplay=""
                    arial-labelledby="range-slider"
                    min={0}
                    max={5000}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="
              mx-auto py-1  sm:py-24 sm:px-6 lg:max-w-1/5 lg:px-8"
            >
              <h2 className="text-2xl font-md tracking-tight text-gray-900">
                All Products
              </h2>
              {loading ? (
                <div class="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
                  <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
              ) : (
                <div className="mt-4 grid grid-cols-2 gap-y-4 gap-x-3 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-2">
                  {products &&
                    products.map((product) => <Product product={product} />)}
                </div>
              )}
            </div>

            <div>
              {productPerPage < productCount && (
                <div className="flex mt-4 justify-center">
                  <Pagination
                    activePage={currentPage}
                    itemClass="page-item"
                    linkClass="page-link"
                    itemsCountPerPage={productPerPage}
                    totalItemsCount={productCount}
                    pageRangeDisplayed={2}
                    onChange={setCurrentPageHandler}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* <section class="text-gray-600 body-font mt-16">
        <div class="container px-5 py-2 mx-auto flex-col">
          <div className="pb-4 ">
            <h2 className="homeHeading pb-2"> Products</h2>
          </div>
          <div>
            <Slider
              // getAriaLabel={() => "Temperature range"}
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="on"
              arial-labelledby="range-slider"
              min={0}
              max={5000}
            />
          </div>
          {loading ? (
            <Loader />
          ) : (
            <div class="flex">
              <div className="max-w-sm mx-auto py-1 px-4 sm:py-24 sm:px-6 lg:max-w-1/5 lg:px-8">
                <h2 className="text-2xl font-md tracking-tight text-gray-900">
                  Featured Products
                </h2>

                <div className="bg- mt-2 grid grid-cols-2 gap-y-10 gap-x- sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-2"></div>
                {products &&
                  products.map((product, key) => (
                    <Product product={product} key={key} />
                  ))}
              </div>
            </div>
           
          )}
          {productPerPage < productCount && (
            <div className="flex mt-4 justify-center">
              <Pagination
                activePage={currentPage}
                itemClass="page-item"
                linkClass="page-link"
                itemsCountPerPage={productPerPage}
                totalItemsCount={productCount}
                pageRangeDisplayed={2}
                onChange={setCurrentPageHandler}
              />
            </div>
          )}
        </div>
      </section> */}
    </>
  );
};

export default AllProductpage;
