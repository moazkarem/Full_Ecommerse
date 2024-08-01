import Title from "../Title/Title";

const BestSelling = () => {
  const images = [
    "https://res.cloudinary.com/dgfe6etuc/image/upload/v1689583514/productsImageCover/xl9inrxucp1cyf0ynnct.webp",
    "http://res.cloudinary.com/dgfe6etuc/image/upload/v1689591643/productsImageCover/hnek4unavgxlnbpwzudv.webp",
    "http://res.cloudinary.com/dgfe6etuc/image/upload/v1689544377/productsImageCover/grmvowp2xuqhwqpspa4i.webp",
    "http://res.cloudinary.com/dgfe6etuc/image/upload/v1689584676/productsImageCover/qi0foxftquob1084hqfj.webp",
  ];

  return (
    <div className=" flex flex-col items-center justify-start pb-28 max-sm:mt-12 px-4 sm:mt-12 xl:mt-28  ">
      <div className="flex text-start justify-start max-sm:mb-3 sm:mb-3 md:mb-5 lg:mb-10">
        <Title name={"Best Selling"} />
      </div>
      <div className="grid max-w-screen-lg w-full lg:text-lg gap-7 max-sm:grid-cols-2 max-sm:gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 ">
        {images.slice(0, 4).map((image, index) => (
          <div
            key={index}
            className=" w-8/9 bg-transparent m-0 group cursor-pointer h-60 max-sm:h-48 mb-16"
          >
            <figure className="overflow-hidden rounded-xl h-full w-full ">
              <img
                src={image}
                alt={`Best Selling ${index}`}
                className="object-cover h-full w-full  scale-100 group-hover:scale-110 ease-in duration-300"
                loading="lazy"
              />
            </figure>
            <div className=" card-body py-3 z-10 rounded-xl bg-white relative bottom-10  shadow-md px-3  w-11/12 mx-auto h-1/3 max-sm:h-1/2">
              <h2 className="card-title text-[14px] font-normal leading-tight h-16   text-ellipsis flex items-start text-primary"> yellow chair</h2>

              <div className="flex justify-between mt-1 max-sm:mt-0">
                <div className="flex gap-2  max-sm:gap-0.5  items-center">
                  <span className="badge badge-lg relative gap-2 font-medium  border-none bg-[#8FC83D] text-sm max-sm:badge-sm max-sm:py-3 text-white">
                    o
                  </span>
                  <span className="text-[#8A8A8A] text-sm  max-sm:text-xs">
                    0()
                  </span>
                </div>
                <div className="flex flex-col  items-center">
                  <span className="font-semibold text-base leading-tight text-black ">
                    {" "}
                    $100
                  </span>
                  <span className="text-sm line-through text-gray-700 leading-tight ">
                    {" "}
                    $100
                  </span>
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
