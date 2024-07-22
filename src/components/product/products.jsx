import React from "react";
import { ProductCard } from "./productCard";
import { productData } from "../../data/productsData";
export const Products = () => {
  return (
    <div className="container mb-20">
      <p className="text-darkSilver text-lg mb-5">NEW PRODUCTS</p>

      <div className="flex flex-wrap gap-2 ">
        {productData.map((item, index) => (
          <ProductCard
            key={index}
            title={item.title}
            img={item.image}
            discount={item.discount}
            price={item.price}
            oldPrice={item.oldPrice}
          />
        ))}
      </div>
    </div>
  );
};
