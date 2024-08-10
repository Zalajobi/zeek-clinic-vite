import { Fragment } from "react";
import { SvgItemProps } from "@type/index.types";

const Doctor = ({ fill, width, height }: SvgItemProps) => {
  return (
    <Fragment>
      <svg
        width={width ?? 30}
        height={height ?? 30}
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        className="iconify iconify--twemoji"
        preserveAspectRatio="xMidYMid meet"
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
            d="M28.977 16.492l.011-.006a6.944 6.944 0 0 1-4.676.372a6.937 6.937 0 0 1-3.947-2.796c.019.028.034.058.054.086L19 14l-.213 1.302a8.913 8.913 0 0 0 4.069 3.174l-.084.311c-.408 1.521-.275 3.296-.134 5.176c.184 2.45.375 4.984-.665 6.933c-.978 1.829-2.921 2.919-5.205 2.919h-.032c-2.129-.01-4.063-.98-4.813-2.415c-.538-1.03-.597-2.431-.66-3.912c-.101-2.393-.214-5.104-2.268-7.443l-3.949-4.501l-1.503 1.319l3.949 4.5c1.588 1.811 1.682 4.046 1.773 6.209c.069 1.636.14 3.328.885 4.754c1.101 2.106 3.682 3.476 6.577 3.489h.042c3.035 0 5.638-1.484 6.968-3.977c1.314-2.461 1.092-5.417.895-8.025c-.128-1.704-.249-3.315.071-4.506l.085-.318c.451.069.902.113 1.352.113a8.924 8.924 0 0 0 3.644-.795L30 17l-1.023-.508z"
          ></path>
          <path
            fill="#99AAB5"
            d="M1.258 18.867a4 4 0 1 1 6.015-5.277a4 4 0 0 1-6.015 5.277z"
          ></path>
          <path
            className={`${fill ? `fill-[${fill}]` : `fill-svg hover:fill-svgHover active:fill-svgActive disabled:fill-svgDisabled`}`}
            d="M2.762 17.548a2 2 0 1 1 3.005-2.638a2 2 0 0 1-3.005 2.638z"
          ></path>
          <path d="M29.791 18.318l-.814-1.826a6.98 6.98 0 0 0 3.911-4.579l.778-2.897a2.004 2.004 0 0 0-1.413-2.451l.52-1.932a4.005 4.005 0 0 1 2.825 4.901l-.778 2.897a8.975 8.975 0 0 1-5.029 5.887zm-11.006-3.014a8.985 8.985 0 0 1-1.35-7.542l.778-2.897a4.004 4.004 0 0 1 4.9-2.826l-.519 1.932a2.001 2.001 0 0 0-2.45 1.413l-.778 2.898a6.982 6.982 0 0 0 1.051 5.867l-1.632 1.155z"></path>
          <path
            className={`${fill ? `fill-[${fill}]` : `fill-svg hover:fill-svgHover active:fill-svgActive disabled:fill-svgDisabled`}`}
            d="M22.56 6.032a1.5 1.5 0 0 1-1.059-1.838l.778-2.897a1.5 1.5 0 0 1 2.897.779l-.778 2.897a1.5 1.5 0 0 1-1.838 1.059zm8.692 2.335a1.5 1.5 0 0 1-1.059-1.838l.778-2.897a1.5 1.5 0 0 1 2.898.779l-.778 2.897a1.501 1.501 0 0 1-1.839 1.059z"
          ></path>
        </g>
      </svg>
    </Fragment>
  );
};

export default Doctor;
