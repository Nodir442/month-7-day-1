import React from "react";
import { HeartIcon } from "../../assets/icons/heart-icon";
export const AcessuarsCard = ({ discount, img, title, price, oldPrice }) => {
  return (
    <div className="relative w-[334px] h-[480px] bg-white rounded-3xl cursor-pointer transition-all duration-300  hover:shadow-white hover:shadow-[0px_0px_15px_0px_rgba(255,255,255,0.2)] ">
      <span className="absolute top-0 left-0 bg-red-600 text-white py-[9px] px-[18px] rounded-tl-3xl rounded-br-3xl">
        {discount}%
      </span>
      <div className="absolute top-[10px] right-[10px]">
        {" "}
        <HeartIcon width={"40px"} height={"40px"} />
      </div>{" "}
      <img className="p-7" src={img} alt="Product Image" />
      <div className="p-5 w-[230px]">
        {" "}
        <h3 className="text-2xl tracking-wider font-semibold">{title}</h3>
        <div className="flex mt-3 items-end gap-x-4">
          {" "}
          <p className="text-red-600 text-xl">{price} uzs</p>
          <p className="text-[#666666] text-lg line-through ">{oldPrice} uzs</p>
        </div>{" "}
      </div>{" "}
    </div>
  );
};
