import React from "react";
import { AcessuarsCard } from "./acessuarsCard";
import { acessuarstData } from "../../data/acessuarsData";
export const Acessuars = () => {
  return (
    <div className="container mb-20">
      <p className="text-darkSilver text-lg mb-5">ACESSUARS</p>

      <div className="flex flex-wrap gap-2 ">
        {acessuarstData.map((item, index) => (
          <AcessuarsCard
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
