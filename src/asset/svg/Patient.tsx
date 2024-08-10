import { Fragment } from "react";
import { SvgItemProps } from "@type/index.types";

const Patient = ({ fill, width, height }: SvgItemProps) => {
  return (
    <Fragment>
      <svg
        viewBox="0 0 1024 1024"
        width={width ?? 30}
        height={height ?? 30}
        className="icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
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
            d="M195.2 534.4l147.2-147.2c73.6-1.6 140.8 28.8 203.2 91.2 62.4 62.4 92.8 129.6 91.2 203.2l-147.2 147.2c-81.6 81.6-212.8 81.6-294.4 0s-81.6-212.8 0-294.4z"
            className={`${fill ? `fill-[${fill}]` : `fill-svg hover:fill-svgHover active:fill-svgActive disabled:fill-svgDisabled`}`}
          ></path>
          <path
            d="M217.6 556.8c-68.8 68.8-68.8 180.8 0 249.6s180.8 68.8 249.6 0l339.2-339.2c68.8-68.8 68.8-180.8 0-249.6s-180.8-68.8-249.6 0L217.6 556.8z m-22.4-22.4l339.2-339.2c81.6-81.6 212.8-81.6 294.4 0s81.6 212.8 0 294.4L489.6 828.8c-81.6 81.6-212.8 81.6-294.4 0s-81.6-212.8 0-294.4z"
            fill="#050D42"
          ></path>
          <path
            d="M590.4 433.6c-12.8 12.8-32 12.8-44.8 0-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0 12.8 11.2 12.8 32 0 44.8z m136 67.2c-12.8 12.8-32 12.8-44.8 0s-12.8-32 0-44.8 32-12.8 44.8 0 12.8 32 0 44.8z m17.6-176c-9.6 9.6-24 9.6-33.6 0-9.6-9.6-9.6-24 0-33.6 9.6-9.6 24-9.6 33.6 0s9.6 24 0 33.6z m62.4-16c-6.4 6.4-16 6.4-22.4 0-6.4-6.4-6.4-16 0-22.4 6.4-6.4 16-6.4 22.4 0 6.4 4.8 6.4 16 0 22.4zM704 251.2c-6.4 6.4-16 6.4-22.4 0s-6.4-16 0-22.4 16-6.4 22.4 0c6.4 6.4 6.4 16 0 22.4z m-22.4 158.4c-6.4 6.4-16 6.4-22.4 0-6.4-6.4-6.4-16 0-22.4 6.4-6.4 16-6.4 22.4 0 6.4 6.4 6.4 16 0 22.4z m-124.8-100.8c-6.4 6.4-16 6.4-22.4 0-6.4-6.4-6.4-16 0-22.4 6.4-6.4 16-6.4 22.4 0 6.4 4.8 6.4 16 0 22.4z m107.2-17.6c-16 16-41.6 16-56 0s-16-41.6 0-56 41.6-16 56 0 16 40 0 56z"
            className={`${fill ? `fill-[${fill}]` : `fill-svg hover:fill-svgHover active:fill-svgActive disabled:fill-svgDisabled`}`}
          ></path>
        </g>
      </svg>
    </Fragment>
  );
};

export default Patient;
