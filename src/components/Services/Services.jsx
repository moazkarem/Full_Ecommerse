import Title from "../Title/Title";
import { HiOutlineShoppingCart } from "react-icons/hi";
// import { FaPhoneVolume } from "react-icons/fa6";
// import { IoIosGift } from "react-icons/io";

// import { HiWindow } from "react-icons/hi2";
const Services = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pb-28 px-4">
      <div className="flex w-full max-w-screen-lg justify-center items-center mb-24">
        <Title name={"Services"} />
      </div>
      <div className="flex flex-col w-full max-w-screen-lg bg-primary rounded-xl px-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className="relative -top-1/4">
              <div className="  shadow-inner w-full h-full text-center bg-white p-5 py-10 rounded-2xl shadow-base flex flex-col gap-3 items-center justify-evenly">
                <h2 className="text-6xl text-primary">
                  <HiOutlineShoppingCart />
                </h2>
                <h1 className="text-primary font-semibold text-lg">
                  Fast Shipping
                </h1>
                <p className="text-secondry">
                  Free delivery for order over $100.00
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:-mb-20 md:-mb-20 -mb-16 ">
          <img
            src="https://user-liard-alpha.vercel.app/images/services.png"
            alt="service image"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
