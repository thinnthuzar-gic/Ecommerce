import React from "react";

const CategoryButton = ({ categoryName, current }) => {
  return (
    <div
      className={`text-xl ${current ? "bg-black text-white" : " "} border-black px-3`}
    >
      {categoryName}
    </div>
  );
};

export default CategoryButton;
