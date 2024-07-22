import React from "react";
import { ArrowRightIcon } from "../../assets/icons/arrowRight-icon";

export const Button = ({
  text,
  textColor="text-[#0C0910]",
  textSize="text-2xl",
  padding = "py-[14px] px-5",
  bgColor = "bg-white",
  iconWidth = "22px",
  iconHeight = "14px",
  border = "",
}) => {
  return (
    <button
      className={`flex items-center ${bgColor} ${padding}  rounded-full ${border}  `}
    >
      <span className={`${textSize} ${textColor} pr-[10px]`}>{text}</span>
      <span>
        <ArrowRightIcon width={iconWidth} height={iconHeight} />
      </span>
    </button>
  );
};
