import React, { useEffect } from "react";
import Product from "./Product";
import { getProducts } from "../Redux/Action/Product";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Navbar from "./Navbar";
import img from "../img.jpg";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import { Autoplay,Navigation } from "swiper";
import Footer from "./Footer";

const Home = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.ProductsData);
  const { loading, error, products } = product;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, error]);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Navbar />
      <section className="h-screen mt-16 z-30">
        <Swiper
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <>
              {" "}
              <img src={img} className="" />
            </>
          </SwiperSlide>
          <SwiperSlide>
            <>
              {" "}
              <img src={img} className="" />
            </>
          </SwiperSlide>
          <SwiperSlide>
            <>
              {" "}
              <img src={img} className="" />
            </>
          </SwiperSlide>
          <SwiperSlide>
            <>
              {" "}
              <img src={img} className="" />
            </>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="pt-4 pb-2 bg-gray-100">
        {loading ? (
          <Loader />
        ) : (
          <div className=" container">
            <div className="max-w-1/5 mx-auto py-1 px-4 sm:py-24 sm:px-6 lg:max-w-1/5 lg:px-8">
              <h2 className="text-2xl font-md tracking-tight text-gray-900">
                Featured Products
              </h2>

              <div className="bg- mt-4 grid grid-cols-2 gap-y-10 gap-x- sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-2">
                {products &&
                  products.map((product) => <Product product={product} />)}
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
