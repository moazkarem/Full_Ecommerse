import BestSelling from "../../components/BestSelling/BestSelling";
import Carosel from "../../components/Carosel/Carosel";
import ModernHome from "../../components/ModernHome/ModernHome";
import ShopCategory from "../../components/ShopCategory/ShopCategory";

const Home = () => {
  return (
    <div>
      <Carosel />
     
        <ShopCategory />
        <BestSelling />
        <ModernHome />
    </div>
  );
};

export default Home;
