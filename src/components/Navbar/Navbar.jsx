import { useState, useEffect } from "react";
import Drawer from "../Drawer/Drawer";
import Button from "../../Ui/Button";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollY(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      
      <div
        className={`navbar ${
          scrollY > 300 ? "bg-[#133A5E]" : "bg-transparent "
        } transition-all duration-500 fixed top-0 w-full z-50 `}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center lg:hidden">
            <button
              className="btn btn-square text-white me-3 btn-ghost"
              onClick={toggleDrawer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-7 w-7 stroke-current"
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
                <NavLink
                  to="/"
                  className="text-white hover:text-[#ffb921] hover:bg-transparent font-bold"
                >
                  Home
                </NavLink>
              </li>
              <li className="text-lg p-2">
                <NavLink
                  to="/shop"
                  className="text-white hover:text-[#ffb921] hover:bg-transparent font-bold"
                >
                  Shop
                </NavLink>
              </li>
              <li className="text-lg p-2">
                <NavLink
                  to="/blog"
                  className="text-white hover:text-[#ffb921] hover:bg-transparent font-bold"
                >
                  Blog
                </NavLink>
              </li>
              <li className="text-lg p-2">
                <NavLink
                  to="/about"
                  className="text-white hover:text-[#ffb921] hover:bg-transparent font-bold"
                >
                  About
                </NavLink>
              </li>
              <li className="text-lg p-2">
                <NavLink
                  to="/contact"
                  className="text-white hover:text-[#ffb921] hover:bg-transparent font-bold"
                >
                  Contact
                </NavLink>
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
