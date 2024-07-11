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
          <div
            key={index}
            className="w-[240px] h-[288px] flex justify-center items-center overflow-hidden"
          >
            <img
              src={image}
              alt={`Best Selling ${index}`}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
