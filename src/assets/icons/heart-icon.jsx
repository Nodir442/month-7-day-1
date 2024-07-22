import React from "react";

export const HeartIcon = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 40 40"
      cursor="pointer"
    >
      <path
        fill="#0D0D0D"
        fillRule="evenodd"
        d="M20.012 13.572l-1.087-1.087a5.5 5.5 0 10-7.778 7.778l8.839 8.839.002-.002.026.026 8.839-8.839a5.5 5.5 0 00-7.778-7.778l-1.063 1.063zm-.024 12.7l4.936-4.937 1.45-1.4h.002l1.063-1.062a3.5 3.5 0 10-4.95-4.95L20.013 16.4l-.007-.007h-.001L17.511 13.9a3.5 3.5 0 00-4.95 4.95l2.54 2.54.001-.003 4.886 4.886z"
        clipRule="evenodd"
      ></path>
      <circle cx="20" cy="36" r="2" fill="#F91B1B"></circle>
    </svg>
  );
};
