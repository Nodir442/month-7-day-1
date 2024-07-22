import React from "react";

export const MailIcon = ({width,height}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
      cursor="pointer"
    >
      <path
        stroke="#262626"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3.334 3.333h13.333c.917 0 1.667.75 1.667 1.667v10c0 .917-.75 1.667-1.667 1.667H3.334c-.917 0-1.667-.75-1.667-1.667V5c0-.917.75-1.667 1.667-1.667z"
      ></path>
      <path
        stroke="#262626"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18.334 5L10 10.833 1.667 5"
      ></path>
    </svg>
  );
};
