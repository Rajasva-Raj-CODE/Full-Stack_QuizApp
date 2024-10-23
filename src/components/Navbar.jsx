import React from "react";
import logo from "../assets/byjus_logo.svg";
import call from "../assets/call.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-[#803588] w-full">
      <div className=" text-yellow-300 py-4 px-8  flex justify-between items-center max-w-6xl m-auto">
        {/* Logo Section  */}
        <Link to="/home">
          <div className="flex items-center">
            <img src={logo} alt="" className="h-[40px]" />
          </div>
        </Link>
        {/* Links Section  */}
        <div class="hidden lg:flex space-x-6">
          <a href="#" className="hover:text-yellow-500">
            Study Materials
          </a>
          <a href="#" className="hover:text-yellow-500">
            BYJU'S Answer
          </a>
          <a href="#" className="hover:text-yellow-500">
            Scholarship
          </a>
          <a href="#" className="hover:text-yellow-500">
            BTC
          </a>
          <a href="#" className="hover:text-yellow-500">
            Buy a Course
          </a>
          <a href="#" className="hover:text-yellow-500">
            Success Stories
          </a>
        </div>
        {/* Login & Call Button */}
        <div className=" flex items-center space-x-4">
          <button class="border border-yellow-300 text-yellow-300 px-4 py-2 rounded-lg hover:bg-yellow-300 hover:text-purple-700">
            Login
          </button>
          <button className="bg-yellow-300 text-purple-700 p-2 rounded-full hover:bg-yellow-400">
            <img src={call} alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
