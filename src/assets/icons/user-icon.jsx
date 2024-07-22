import React from "react";

export const UserIcon = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 40 40"
      cursor="pointer"
    >
      <mask
        id="mask0_3_12823"
        style={{ maskType: "alpha" }}
        width="24"
        height="24"
        x="8"
        y="8"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M8 8H32V32H8z"></path>
      </mask>
      <g mask="url(#mask0_3_12823)">
        <circle cx="20" cy="16" r="5" stroke="#0D0D0D" strokeWidth="2"></circle>
        <path
          fill="#0D0D0D"
          d="M30 30a10 10 0 00-20 0h2a8 8 0 1116 0h2z"
        ></path>
      </g>
    </svg>
  );
};
