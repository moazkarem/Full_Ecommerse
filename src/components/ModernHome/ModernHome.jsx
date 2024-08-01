import 'tailwindcss/tailwind.css';
import Title from "../Title/Title";

const ModernHome = () => {
   
  
  return (
    <div className="all-moden-home flex flex-col items-center pb-28 px-4">
      <div className="flex w-full max-w-screen-lg justify-center items-center mb-9">
        <Title name={"Modern Home Ideas"} />
      </div>
      <div className="grid figures-modern grid-flow-row gap-3 max-w-screen-lg sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3">
        <figure className="relative first-fig col-span-1 sm:w-full md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
          <img
            src="https://user-liard-alpha.vercel.app/assets/555-f5869f40.webp"
            className="h-80 w-full lg:h-full rounded-xl object-cover"
            alt="Image 1"
          />
        </figure>
        <figure className="relative col-span-1 sm:w-full md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
          <img
            src="https://res.cloudinary.com/dgfe6etuc/image/upload/v1689583514/productsImageCover/xl9inrxucp1cyf0ynnct.webp"
            className="h-80 w-full lg:h-full rounded-xl object-cover"
            alt="Image 2"
          />
        </figure>
        <figure className="relative col-span-1 row-span-2 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2 xl:col-span-1 xl:row-span-2 2xl:col-span-1 2xl:row-span-2">
          <img
            src="https://res.cloudinary.com/dgfe6etuc/image/upload/v1689584211/productsImageCover/glvoaiprkrhqksftdonu.webp"
            className="h-80 w-full lg:h-full rounded-xl object-cover"
            alt="Image 3"
          />
        </figure>
        <figure className="relative col-span-2 row-span-2 sm:col-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 xl:col-span-2 xl:row-span-2 2xl:col-span-2 2xl:row-span-2">
          <img
            src="https://res.cloudinary.com/dgfe6etuc/image/upload/v1689583106/productsImageCover/efwmnemew6pfyrkbdf0b.webp"
            className=" h-80 w-full lg:h-full rounded-xl object-cover"
            alt="Image 4"
          />
        </figure>
        <figure className="relative col-span-1 2xl:col-span-1">
          <img
            src="https://res.cloudinary.com/dgfe6etuc/image/upload/v1689584676/productsImageCover/qi0foxftquob1084hqfj.webp"
            className="h-80 w-full lg:h-full rounded-xl object-cover"
            alt="Image 5"
          />
        </figure>
      </div>
    </div>
  );
};

export default ModernHome;
