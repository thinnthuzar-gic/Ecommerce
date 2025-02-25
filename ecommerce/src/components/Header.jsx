import React from "react";

const Header = () => {
  const title = "Online Shop";

  return (
    <header className="px-5 py-2">
      <div className="flex justify-between items-center flex-row">
        <p className=" text-2xl ">{title}</p>
        <div className="bg-black text-white relative p-3 rounded mb-2">
          <button>
            My Cart
            <span className="absolute rounded -right-3 top-0.5 py-1 inline-block text-xs px-2 bg-red-500">
              1
            </span>
          </button>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Header;
