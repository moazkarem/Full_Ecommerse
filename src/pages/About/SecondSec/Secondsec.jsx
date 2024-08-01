const Secondsec = () => {
  return (
    <>
      <div className="max-sm:px-[1rem] sm:px-[2.5rem] md:px-[3rem] lg:px-[4rem] xl:px-[12rem] py-16 w-full flex flex-col sm:flex-col sm:gap-10  max-sm:gap-10 md:gap-28 md:flex-row justify-center items-center ">
        <div className="w-1/2 max-sm:w-10/12 sm:w-10/12 md:w-1/2 ">
          <h6 className="text-primary font-semibold text-lg max-sm:text-center max-sm:text-2xl sm:text-center md:text-xl mb-4 md:mb-6 md:text-start">
            We pick our team
          </h6>
          <p className="text-gray-500 font-inter leading-5 max-sm:text-center max-sm:text-base sm:text-center sm:text-lg  md:leading-7 text-sm md:text-lg md:text-start">
            Our team is passionate about furniture, and we collaborate
            effectively to achieve your goals and deliver high-quality work.
            We are trying to go above and beyond to meet your expectations and
            deliver exceptional results to make your dream home true.
          </p>
        </div>
        <div className="h-52 sm:h-80 md:h-80 object-contain">
          <img
            className="h-52 sm:h-80 md:h-80 object-contain"
            src="https://user-liard-alpha.vercel.app/assets/Vector-c591be1d.png"
          />
        </div>
      </div>
    </>
  );
};

export default Secondsec;
