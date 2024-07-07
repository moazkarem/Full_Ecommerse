import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
const RootLayout = () => {
  return (
    <div className="">
      <div className="mb-[71px]">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
