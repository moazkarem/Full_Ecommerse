import BestSelling from "../../components/BestSelling/BestSelling";
import Carosel from "../../components/Carosel/Carosel";
import ModernHome from "../../components/ModernHome/ModernHome";
import Services from "../../components/Services/Services";
import ShopCategory from "../../components/ShopCategory/ShopCategory";

const Home = () => {
  return (
    <div>
      <Carosel />
     
        <ShopCategory />
        <BestSelling />
        <ModernHome />
        <Services />
    </div>
  );
};

export default Home;
