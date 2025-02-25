import React from "react";
import CategoryButton from "./Button";

const CategorySection = () => {
  const title = "Product Categories";
  const categories = ["Electronics", "Jewelery", "Men's Clothing", "Watch"];

  return (
    <div id="category-section" className="p-5 text-start">
      <p className="text-xl">{title}</p>
      <div className="flex overflow-auto mt-5">
        <CategoryButton categoryName="All" current={true} />

        {categories.map((category, index) => (
          <CategoryButton key={index} categoryName={category} current={false} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
