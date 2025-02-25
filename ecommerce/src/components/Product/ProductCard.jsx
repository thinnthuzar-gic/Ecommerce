import React from "react";
import Rating from "./Rating";

const ProductCard = ({ title, price, description, rating, image }) => {
  return (
    <div className="border-2 border-slate-500 rounded p-4">
      <div className="text-start h-50">
        <img src={image} className="h-32 w-32 border-purple-500" alt="" />
        <p className="text-red-600">{title}</p>
        <Rating rating={rating} />
      </div>
      <div className="flex justify-between items-baseline">
        <p>{price}</p>
        <button className="bg-black text-white rounded  p-2">My Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
