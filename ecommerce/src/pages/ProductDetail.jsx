import React from "react";
import { useParams } from "react-router-dom";
import products from "../components/Product/products";
import Rating from "../components/Product/Rating";

const ProductDetail = () => {
  const productDetail = useParams(); // Extract productId from URL params

  //search current id in products collection
  const currentProduct = products.find(
    (product) => product.id === Number(productDetail.id)
  );

  return (
    <div className=" card p-4 border rounded mt-4">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex justify-center">
          <img
            src={currentProduct.image}
            className="h-32 w-32 border-purple-500"
            alt=""
          />
        </div>

        <div className="flex flex-col justify-between text-start">
          <p className="text-red-600 text-xl">{currentProduct.title}</p>
          <p>{currentProduct.description}</p>
          <Rating rating={currentProduct.rating.rate} />
          <div className="flex justify-between items-baseline">
            <p>{currentProduct.price}</p>
            <button className="bg-black text-white rounded p-2">Add Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
