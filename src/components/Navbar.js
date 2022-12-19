import React from "react";
import { GoHome } from "react-icons/go";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="flex justify-around items-center h-[4rem] bg-slate-200 shadow-sm">
        <div className="flex flex-col items-center justify-center cursor-pointer">
     
          <GoHome size={30} />
          <NavLink to="/">

          <p className="text-slate-500">Home</p>
          </NavLink>
      
        </div>
      <div className="flex gap-4">
        <p className=" font-semibold cursor-pointer ">ABOUT</p>
        <p className=" font-semibold cursor-pointer ">MOVIES</p>
      </div>
    </div>
  );
};

export default Navbar;
