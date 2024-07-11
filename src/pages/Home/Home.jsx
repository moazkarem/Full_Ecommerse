import BestSelling from "../../components/BestSelling/BestSelling";
import Carosel from "../../components/Carosel/Carosel";
import ShopCategory from "../../components/ShopCategory/ShopCategory";

const Home = () => {
  return (
    <div>
      <Carosel />
     
        <ShopCategory />
        <BestSelling />
    </div>
  );
};

export default Home;
