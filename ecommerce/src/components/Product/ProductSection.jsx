import React from "react";
import ProductCard from "./ProductCard";
import products from "./products";

const ProductSection = () => {

  return (
    <div className="px-3">
      <p className="text-blue-500 text-start">Available Products</p>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product, index) => (
         
          <ProductCard
            key={index}
            id = {product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            rating ={product.rating.rate}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
