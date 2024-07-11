import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../Ui/Button";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import slide1 from "../../assets/imgs/carousil/slide1.jpg";
import slide2 from "../../assets/imgs/carousil/slide2.jpg";
import slide3 from "../../assets/imgs/carousil/slide3.jpg";
import slide4 from "../../assets/imgs/carousil/slide4.jpg";
// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const Carousel = () => {
  return (
    <div className="mb-28">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-full flex ">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <img
              src={slide1}
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute cars-titles top-0 lg:w-1/4 lg:left-32 flex lg:items-start md:left-2 sm:left-2 sm:w-full sm:items-center xs:w-full xs:items-center flex-col justify-center items-start h-full w-1/4 px-4">
              <h1 className="text-white pb-10 text-4xl font-bold">
                Better interiors
              </h1>
              <p className="md:text-center sm:text-center lg:text-xl lg:text-start lg:w-full w-1/2 md:text-lg text-wrap text-start pb-10 text-xl text-white">
                {" "}
                The Perfect Place For Every Contemporary Furniture Store And
                Manufacture . This Is Furnival{" "}
              </p>
              <Button
                style={`bg-white text-[#133A5E] text-2xl w-40 py-2 rounded-3xl hover:bg-[#ffb921] hover:text-white `}
              >
                {" "}
                View More{" "}
              </Button>
            </div>
            <div className="absolute img-cars  top-48 right-36  flex-row gap-4 lg:flex md:hidden sm:hidden ">
              <div className="w-52 me-10 h-[280px] rounded-3xl overflow-hidden">
                <img
                  src="https://user-liard-alpha.vercel.app/assets/img1-1-69ec8cee.webp"
                  alt="Right Image 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-52 me-10 h-[280px] rounded-3xl overflow-hidden mt-14">
                <img
                  src="https://user-liard-alpha.vercel.app/assets/img1-2-4856c4b1.webp"
                  alt="Right Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full flex ">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <img
              src={slide2}
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute cars-titles top-0 lg:w-1/4 lg:left-32 flex lg:items-start md:left-2 sm:left-2 sm:w-full sm:items-center xs:w-full xs:items-center flex-col justify-center items-start h-full w-1/4 px-4">
              <h1 className="text-white pb-10 text-4xl font-bold">
                Better interiors
              </h1>
              <p className="md:text-center sm:text-center lg:text-xl lg:text-start lg:w-full w-1/2 md:text-lg text-wrap text-start pb-10 text-xl text-white">
                {" "}
                The Perfect Place For Every Contemporary Furniture Store And
                Manufacture . This Is Furnival{" "}
              </p>
              <Button
                style={`bg-white text-[#133A5E] text-2xl w-40 py-2 rounded-3xl hover:bg-[#ffb921] hover:text-white `}
              >
                {" "}
                View More{" "}
              </Button>
            </div>
            <div className="absolute img-cars top-48 right-36 flex flex-row gap-4 lg:flex md:hidden sm:hidden xs:hidden">
              <div className="w-52 me-10 h-[280px] rounded-3xl overflow-hidden ">
                <img
                  src="https://user-liard-alpha.vercel.app/assets/img2-1-3c6d0594.jpg"
                  alt="Right Image 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-52 me-10 h-[280px] rounded-3xl overflow-hidden mt-14">
                <img
                  src="https://user-liard-alpha.vercel.app/assets/img2-2-8e925dbf.jpg"
                  alt="Right Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full flex ">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <img
              src={slide3}
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute cars-titles lg:items-start top-0 lg:w-1/4 lg:left-32 flex md:left-2 sm:left-2 sm:w-full sm:items-center xs:w-full xs:items-center flex-col justify-center items-start h-full w-1/4 px-4">
              <h1 className="text-white pb-10 text-4xl font-bold">
                Better interiors
              </h1>
              <p className="md:text-center sm:text-center lg:text-xl lg:text-start lg:w-full w-1/2 md:text-lg text-wrap text-start pb-10 text-xl text-white">
                {" "}
                The Perfect Place For Every Contemporary Furniture Store And
                Manufacture . This Is Furnival{" "}
              </p>
              <Button
                style={`bg-white text-[#133A5E] text-2xl w-40 py-2 rounded-3xl hover:bg-[#ffb921] hover:text-white `}
              >
                {" "}
                View More{" "}
              </Button>
            </div>
            <div className="absolute img-cars top-48 right-36 flex flex-row gap-4 lg:flex md:hidden sm:hidden xs:hidden">
              <div className="w-52 me-10 h-[280px] rounded-3xl overflow-hidden ">
                <img
                  src="https://user-liard-alpha.vercel.app/assets/img1-1-69ec8cee.webp"
                  alt="Right Image 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-52 me-10 h-[280px] rounded-3xl overflow-hidden mt-14">
                <img
                  src="https://user-liard-alpha.vercel.app/assets/img1-2-4856c4b1.webp"
                  alt="Right Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full flex ">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <img
              src={slide4}
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
            <div className="absolute cars-titles lg:items-start top-0 lg:w-1/4 lg:left-32 flex md:left-2 sm:left-2 sm:w-full sm:items-center xs:w-full xs:items-center flex-col justify-center items-start h-full w-1/4 px-4">
              <h1 className="text-white pb-10 text-4xl font-bold">
                Better interiors
              </h1>
              <p className="md:text-center sm:text-center lg:text-xl lg:text-start lg:w-full w-1/2 md:text-lg text-wrap text-start pb-10 text-xl text-white">
                {" "}
                The Perfect Place For Every Contemporary Furniture Store And
                Manufacture . This Is Furnival{" "}
              </p>
              <Button
                style={`bg-white text-[#133A5E] text-2xl w-40 py-2 rounded-3xl hover:bg-[#ffb921] hover:text-white `}
              >
                {" "}
                View More{" "}
              </Button>
            </div>
            <div className="absolute img-cars top-48 right-36 flex flex-row gap-4 lg:flex md:hidden sm:hidden xs:hidden">
              <div className="w-52 me-10 h-[280px] rounded-3xl overflow-hidden ">
                <img
                  src="https://user-liard-alpha.vercel.app/assets/img4-1-5978bf7e.webp"
                  alt="Right Image 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-52 me-10 h-[280px] rounded-3xl overflow-hidden mt-14">
                <img
                  src="https://user-liard-alpha.vercel.app/assets/img4-2-29bf5184.webp"
                  alt="Right Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
