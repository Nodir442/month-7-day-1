import React from "react";

export const BasketIcon = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 40 40"
    >
      <path
        stroke="#0D0D0D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 10l-3 4v14a2 2 0 002 2h14a2 2 0 002-2V14l-3-4H14zM24 18a4 4 0 11-8 0M11 14h18"
      ></path>
      <circle cx="20" cy="36" r="2" fill="#F91B1B"></circle>
    </svg>
  );
};
