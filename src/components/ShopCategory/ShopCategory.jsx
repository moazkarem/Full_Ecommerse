import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Title from "../Title/Title";

const ShopCategory = () => {
  const swiperRef = useRef(null);
  const images = [
    "https://res.cloudinary.com/dgfe6etuc/image/upload/v1687562756/categoriesImage/baiek68kb8uaoub9fhjt.jpg",
    "https://res.cloudinary.com/dgfe6etuc/image/upload/v1687562819/categoriesImage/plwsfiglgbsp7fgursdo.jpg",
    "https://res.cloudinary.com/dgfe6etuc/image/upload/v1687562906/categoriesImage/pftahjxsotfjjksuy7vd.jpg",
    "https://res.cloudinary.com/dgfe6etuc/image/upload/v1687563025/categoriesImage/nwqprhswqw3c9btmrfol.jpg",
    "https://res.cloudinary.com/dgfe6etuc/image/upload/v1687563108/categoriesImage/qogvzkqdsmq0nxk7mnap.jpg",
    "https://res.cloudinary.com/dgfe6etuc/image/upload/v1687562819/categoriesImage/plwsfiglgbsp7fgursdo.jpg",
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center mb-28 px-4 relative">
      <div className="flex w-full max-w-screen-lg justify-between items-center mb-9">
        <Title name={"Shop by Category"} />
        <div className="flex space-x-2 p-2 z-10 ">
          <button
            onClick={() => swiperRef.current.swiper.slidePrev()}
            className="p-1 bg-white rounded-full shadow-md  border-2 border-[#133a5e]"
          >
            <svg
              className="w-5 h-5 text-gray-600 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current.swiper.slideNext()}
            className="p-1 bg-white rounded-full shadow-md border-2 border-[#133a5e]"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full max-w-screen-lg overflow-hidden">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={20}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            0: {
              slidesPerView: 2.2,
            },

            600: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="shoping-slider w-[240px] h-[288px]"
            >
              <div className="flex justify-center items-center w-full h-full max-w-[240px] max-h-[288px]">
                <img
                  src={image}
                  alt={`Category ${index}`}
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ShopCategory;
