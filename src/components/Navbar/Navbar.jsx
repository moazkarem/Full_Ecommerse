import { useState } from "react";
import Drawer from "../Drawer/Drawer";
import Button from "../../Ui/Button";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center lg:hidden">
            <button className="btn btn-square btn-ghost" onClick={toggleDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div className=" flex items-center flex-1 lg:flex-none text-center lg:text-left">
            <img
              className="w-9 me-2"
              src="https://user-liard-alpha.vercel.app/assets/logo-921ec42d.png"
              alt="logo "
            />
            <h3 className="text-2xl text-white font-bold"> Furnival </h3>
          </div>
          <div className="hidden lg:flex flex-1 justify-center space-x-4">
            <ul className="menu menu-horizontal p-0">
              <li className="text-lg p-2">
                <a className="text-white hover:text-[#ffb921] hover:bg-transparent font-bold">
                  Home
                </a>
              </li>
              <li className="text-lg p-2">
                <a className="text-white hover:text-[#ffb921] hover:bg-transparent font-bold">
                  Shop
                </a>
              </li>
              <li className="text-lg p-2">
                <a className="text-white hover:text-[#ffb921] hover:bg-transparent font-bold">
                  Blog
                </a>
              </li>
              <li className="text-lg p-2">
                <a className="text-white hover:text-[#ffb921] hover:bg-transparent font-bold">
                  About
                </a>
              </li>
              <li className="text-lg p-2">
                <a className="text-white hover:text-[#ffb921] hover:bg-transparent font-bold">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-none">
            <Button
              style={`text-[#133a5e] bg-[#ffb921] btn-sm  rounded-3xl btn text-lg  px-6 hover:bg-[#ffb921]`}
            >
              LOGIN{" "}
            </Button>
          </div>
        </div>
      </div>
      <Drawer
        toggleDrawer={toggleDrawer}
        setIsDrawerOpen={setIsDrawerOpen}
        isDrawerOpen={isDrawerOpen}
      />
    </div>
  );
};

export default Navbar;
