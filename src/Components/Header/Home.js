import React, { useEffect } from "react";
import Product from "./Product";
import { getProducts } from "../Redux/Action/Product";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Navbar from "./Navbar";
import img from "../img.jpg";
import b1 from "../Images/b1.jpg";
import b2 from "../Images/b2.jpg";
import b3 from "../Images/b3.jpg";
import b4 from "../Images/b4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const Home = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.ProductsData);
  const { loading, error, products } = product;

  console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, error]);

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Navbar />
      <section class="text-gray-600 body-font">
        <div class="container md:px-5 pt-24 mx-auto">
          <Slider {...settings}>
            <div className="h-64">
              <img className="bg-cover w-full h-full  " src={b1} alt="" />
            </div>
            <div className="h-64">
              <img className="bg-cover w-full h-full  " src={b2} alt="" />
            </div>
            <div className="h-64">
              <img className="bg-cover w-full h-full  " src={b3} alt="" />
            </div>
            <div className="h-64">
              <img className="bg-cover w-full h-full  " src={b4} alt="" />
            </div>
          </Slider>
        </div>
      </section>

      <section className="pt-4 pb-4 bg-gray-100">
        {loading ? (
          <Loader />
        ) : (
          <div className=" container ">
            <div className="bg-white max-w-1/5 mx-auto py-1 px-2 sm:py-24 sm:px-6 lg:max-w-1/5 lg:px-8">
              <div class="mb-4 flex items-center justify-between">
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    Latest Products
                  </h3>
                </div>
                <div class="flex-shrink-0">
                  <Link to="/v1/products">
                    <p class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">
                      View all
                    </p>
                  </Link>
                </div>
              </div>
              <div className=" mt-4 grid grid-cols-2 gap-y-4 gap-x-3 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-2">
                {products &&
                  products.map((product, key) => (
                    <Product product={product} key={key} />
                  ))}
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Home;
