import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Title from "../Title/Title";

const ShopCategory = () => {
  const swiperRef = useRef(null);
  const images = [
    "https://res.cloudinary.com/dgfe6etuc/image/upload/v1687563108/categoriesImage/qogvzkqdsmq0nxk7mnap.jpg",
    "https://res.cloudinary.com/dgfe6etuc/image/upload/v1687563108/categoriesImage/qogvzkqdsmq0nxk7mnap.jpg",
    "https://res.cloudinary.com/dgfe6etuc/image/upload/v1687563108/categoriesImage/qogvzkqdsmq0nxk7mnap.jpg",
    "https://res.cloudinary.com/dgfe6etuc/image/upload/v1687563108/categoriesImage/qogvzkqdsmq0nxk7mnap.jpg",
    "https://res.cloudinary.com/dgfe6etuc/image/upload/v1687563108/categoriesImage/qogvzkqdsmq0nxk7mnap.jpg",
    "https://res.cloudinary.com/dgfe6etuc/image/upload/v1687563108/categoriesImage/qogvzkqdsmq0nxk7mnap.jpg",
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center py-8 relative">
      <div className="absolute top-[-30px] right-40 flex space-x-2 p-2 z-10">
        <button
          onClick={() => swiperRef.current.swiper.slidePrev()}
          className="p-2 bg-white rounded-full shadow-md"
        >
          <svg
            className="w-6 h-6 text-gray-600"
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
          className="p-2 bg-white rounded-full shadow-md"
        >
          <svg
            className="w-6 h-6 text-gray-600"
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
      <div className="absolute top-[-30px] left-40 flex  p-2 z-10">
        <Title name={"Shop Category"} />
      </div>
      <div className="w-full max-w-screen-lg overflow-hidden">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={20} // تعيين المسافة بين السلايدات هنا
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            450: {
              slidesPerView: 2,
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
            <SwiperSlide key={index} className="w-[224px] h-[288px]">
              <div className="flex justify-center items-center w-full h-full max-w-[224px] max-h-[288px]">
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
