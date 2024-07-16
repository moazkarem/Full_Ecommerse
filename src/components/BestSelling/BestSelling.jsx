import Title from "../Title/Title";

const BestSelling = () => {
  const images = [
    "https://res.cloudinary.com/dgfe6etuc/image/upload/v1689583514/productsImageCover/xl9inrxucp1cyf0ynnct.webp",
    "http://res.cloudinary.com/dgfe6etuc/image/upload/v1689591643/productsImageCover/hnek4unavgxlnbpwzudv.webp",
    "http://res.cloudinary.com/dgfe6etuc/image/upload/v1689544377/productsImageCover/grmvowp2xuqhwqpspa4i.webp",
    "http://res.cloudinary.com/dgfe6etuc/image/upload/v1689584676/productsImageCover/qi0foxftquob1084hqfj.webp",
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center pb-28  px-4 relative">
      <div className="flex w-full max-w-screen-lg justify-between items-center mb-9">
        <Title name={"Best Selling"} />
      </div>
      <div className="w-full max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {images.slice(0, 4).map((image, index) => (
          <div key={index} className="relative selling-cont">
            <div className="w-[240px] h-[288px] flex justify-center items-center overflow-hidden">
              <img
                src={image}
                alt={`Best Selling ${index}`}
                className="rounded-lg w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className=" absolute left-4 -bottom-10  best-details w-52 p-3 bg-white shadow-2xl rounded-md">
              <span className=" text-[#133a5e] text-[16px]">yellow chair</span>
              <div className="pt-1 flex justify-between items-center">
                <span className="bg-[#8fc83d] px-3 rounded-md text-white">o</span>
                <div className="flex flex-col  items-center">
                <span className="text-black font-bold "> $100</span>
                <span className="text-black line-through  "> $100</span>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
