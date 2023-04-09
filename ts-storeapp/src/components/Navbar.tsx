import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 h-[50px] text-white bg-cyan-800 ">
      <h3 className="font-bold italic">Store</h3>
      <div>
        <Link className="mr-4" to={"/"}>Home</Link>
        <Link to={"/favorites"}>Favorites</Link>
      </div>
    </div>
  );
};

export default Navbar;
