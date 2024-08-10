import { Fragment } from "react";
import { SvgItemProps } from "@type/index.types";

const Wallet = ({ fill, width, height }: SvgItemProps) => {
  return (
    <Fragment>
      <svg
        viewBox="0 0 30 30"
        width={width ?? 30}
        height={height ?? 30}
        id="Layer_1"
        version="1.1"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            className={`${fill ? `fill-[${fill}]` : `fill-svg hover:fill-svgHover active:fill-svgActive disabled:fill-svgDisabled`}`}
            d="M25,22v4c0,0.6-0.4,1-1,1H6c-0.6,0-1-0.4-1-1V13c0-0.6,0.4-1,1-1h18c0.6,0,1,0.4,1,1v4h-4.5 c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5H25z M20.5,18.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S21.1,18.5,20.5,18.5z M18.5,2 C17.1,2,16,3.1,16,4.5S17.1,7,18.5,7S21,5.9,21,4.5S19.9,2,18.5,2z M14.7,10C14.9,9.6,15,9.2,15,8.7c0-1.7-1.3-3-3-3s-3,1.3-3,3 C9,9.2,9.1,9.6,9.3,10H14.7z"
          ></path>
        </g>
      </svg>
    </Fragment>
  );
};

export default Wallet;
