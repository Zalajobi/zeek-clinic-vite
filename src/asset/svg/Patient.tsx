import { Fragment } from "react";
import { SvgItemProps } from "@type/index.types";

const Patient = ({ fill, width, height }: SvgItemProps) => {
  return (
    <Fragment>
      <svg viewBox="0 0 32 32" width={width ?? 30} height={height ?? 30} xmlns="http://www.w3.org/2000/svg" fill="#000000">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <defs>
            <style></style>
          </defs>
          <g data-name="22. Video Consultation" id="_22._Video_Consultation">
            <path style={{fill: "#77ACF1"}}
                  d="M19,28H13a1,1,0,0,1-1-1V25a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v2A1,1,0,0,1,19,28Zm-5-2h0Z"></path>
            <path style={{
              fill: fill ?? "#04009a",
            }}
                  d="M31,24V7a3,3,0,0,0-3-3H25a1,1,0,0,0,0,2h3a1,1,0,0,1,1,1V24H26V19a5,5,0,0,0-5-5h-.54A6,6,0,0,0,22,10V4.35a3,3,0,0,0-1.89-2.78L16.37.07a1,1,0,0,0-.74,0l-3.74,1.5A3,3,0,0,0,10,4.35V10a6,6,0,0,0,1.54,4H11a5,5,0,0,0-5,5v5H3V7A1,1,0,0,1,4,6H7A1,1,0,0,0,7,4H4A3,3,0,0,0,1,7V24a1,1,0,0,0-1,1v2a5,5,0,0,0,5,5H27a5,5,0,0,0,5-5V25A1,1,0,0,0,31,24ZM12,4.35a1,1,0,0,1,.63-.92L16,2.08l3.37,1.35a1,1,0,0,1,.63.92V6H12ZM12,10V8h8v2a4,4,0,0,1-8,0ZM8,19a3,3,0,0,1,3-3h4v2a1,1,0,0,0,2,0V16h4a3,3,0,0,1,3,3v5H8Zm22,8a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V26H30Z"></path>
            <path style={{fill: "#77ACF1"}}
                  d="M22,20a1,1,0,0,1-1,1,1,1,0,0,1-2,0,1,1,0,0,1,0-2,1,1,0,0,1,2,0A1,1,0,0,1,22,20Z"></path>
            <circle style={{fill: "#77ACF1"}} cx="16" cy="6" r="2"></circle>
          </g>
        </g>
      </svg>
    </Fragment>
  );
};

export default Patient;
