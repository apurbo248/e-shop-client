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
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import { Autoplay, Navigation } from "swiper";
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
      <section class="text-gray-600 body-font">
        <div class="container px-5 pt-24 mx-auto">
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
                <div class="flex  -m-4">
                  <div class="w-full py-4">
                    <div class="bg-gray-100  rounded-lg">
                      <img
                        class="h-100 rounded w-full object-cover object-center mb-6"
                        src={b1}
                        alt="content"
                      />
                    </div>
                  </div>
                </div>
              </>
            </SwiperSlide>
            {/* <SwiperSlide>
              <>
                <div class="flex flex-wrap -m-4">
                  <div class="w-full py-4">
                    <div class="bg-gray-100  rounded-lg">
                      <img
                        class="h-full rounded w-full object-cover object-center mb-6"
                        src={b2}
                        alt="content"
                      />
                    </div>
                  </div>
                </div>
              </>
            </SwiperSlide>
            <SwiperSlide>
              <>
                <div class="flex flex-wrap -m-4">
                  <div class="w-full py-4">
                    <div class="bg-gray-100  rounded-lg">
                      <img
                        class="h-full rounded w-full object-cover object-center mb-6"
                        src={b3}
                        alt="content"
                      />
                    </div>
                  </div>
                </div>
              </>
            </SwiperSlide>
            <SwiperSlide>
              <>
                <div class="flex flex-wrap -m-4">
                  <div class="w-full py-4">
                    <div class="bg-gray-100  rounded-lg">
                      <img
                        class="h-full rounded w-full object-cover object-center mb-6"
                        src={b4}
                        alt="content"
                      />
                    </div>
                  </div>
                </div>
              </>
            </SwiperSlide> */}
          </Swiper>

          {/* <div class="flex flex-wrap -m-4">
      <div class="w-full py-4">
        <div class="bg-gray-100  rounded-lg">
          <img class="h-80 rounded w-full object-cover object-center mb-6" src={img} alt="content"/>
         
        </div>
      </div>
      
      
    </div> */}
        </div>
      </section>
      {/* <section className="container mt-20 z-30">
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
              <img src={img} className="lg:w-96 w-64 lg:h-full h-64  object-center rounded" />
            </>
          </SwiperSlide>
          <SwiperSlide>
            <>
              {" "}
              <img src={img} className="lg:w-96 w-64 lg:max-h-64 h-64  object-center rounded" />
            </>
          </SwiperSlide>
          <SwiperSlide>
            <>
              {" "}
              <img src={img} className="lg:w-96 w-64 lg:h-full h-64  object-center rounded" />
            </>
          </SwiperSlide>
          <SwiperSlide>
            <>
              {" "}
              <img src={img} className="lg:w-96 w-64 lg:h-full h-64  object-center rounded" />
            </>
          </SwiperSlide>
        </Swiper>
      </section> */}

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
                  products.map((product,key) => <Product product={product} key={key} />)}
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
