import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

const Header = () => {
  const title = "Online Shop";

  return (
    <header>
      <div className="flex justify-between items-center flex-row">
        <Link to={"/"} className=" text-2xl ">{title}</Link>
        <div className="bg-black text-white relative p-3 rounded mb-2">
          <Link to={"/cart"}>
            My Cart
            <span className="absolute rounded -right-3 top-0.5 py-1 inline-block text-xs px-2 bg-red-500">
              1
            </span>
          </Link>
        </div>
      </div>

      <hr />
    </header>
  );
};

export default Header;
