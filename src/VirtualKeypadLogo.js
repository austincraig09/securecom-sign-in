import React from "react";
import { primary } from "./colors";

function VirtualKeypadLogo({ theme = "light", style = {}, ...rest }) {
  return (
    <svg
      {...rest}
      style={{ width: "100%", ...style }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 65 79.51"
    >
      <defs>
        <style>
          {`.cls-1{fill:url(#linear-gradient);}.cls-2{fill:${
            theme === "light" ? "#FFFFFF" : "#383F45"
          };}`}
        </style>
        <linearGradient
          id="linear-gradient"
          y1="39.75"
          x2="64.72"
          y2="39.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={primary(300)} />
          <stop offset="1" stopColor={primary(500)} />
        </linearGradient>
      </defs>
      <title>Virtual Keypad</title>
      <path
        className="cls-1"
        d="M64.37,9.63c-.25-.79-1-3.19-5.1-5.09C54.83,2.47,46.64,0,32.83,0,22.36,0,14,1.09,7.86,3.23,5.69,4,.61,6.18.11,10,0,11,0,13.66,0,14V42.74C0,53.82,8.38,63.15,15.44,69c1.33,1.1,2.73,2.2,4.17,3.23a.57.57,0,0,0,.12.1h0c6.1,4.36,11.85,7.15,13.1,7.15,2.5,0,31.86-15.67,31.86-36.77V14A23.41,23.41,0,0,0,64.37,9.63Zm-55.16,3C10,11.9,15,9,32.76,9c13.62,0,20.76,2.24,22.75,3.59v29.3c0,7.75-6.25,14.84-11.49,19.43a75.09,75.09,0,0,1-11.26,8.07C30,67.91,9.21,55.94,9.21,41.93Z"
      />
    </svg>
  );
}

export default VirtualKeypadLogo;
