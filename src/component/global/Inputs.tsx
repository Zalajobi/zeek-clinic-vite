import { Fragment, ReactNode } from "react";
import {
  color,
  size,
  variant,
} from "@material-tailwind/react/types/components/input";
import { color as checkBoxColor } from "@material-tailwind/react/types/components/checkbox";
import { CustomTypography } from "@component/global/Typography";
import { Checkbox, Input } from "@material-tailwind/react";
import clsx from "clsx";

interface CustomInputProps {
  onChange: (e: never) => void;
  name: string;
  type?:
    | "text"
    | "email"
    | "color"
    | "hidden"
    | "password"
    | "tel"
    | "datetime-local"
    | "date"
    | "button"
    | "checkbox"
    | "file"
    | "image"
    | "month"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "time"
    | "url"
    | "week";
  variant?: variant;
  size?: size;
  color?: color;
  label?: string;
  error: string | undefined;
  success?: boolean;
  icon?: ReactNode;
  className?: string;
  show?: boolean;
  placeholder?: string;
}

interface CustomCheckBoxProps {
  color: checkBoxColor;
  name: string;
  label: string;
  onChange: (e: never) => void;
  className?: string;
  icon?: ReactNode;
  ripple?: boolean;
  disabled?: boolean;
  rounded?: boolean;
}

export const TextInput = ({
  name,
  type = "text",
  size = "lg",
  variant = "outlined",
  error,
  success,
  icon,
  label,
  color,
  onChange,
  className = "",
  show = true,
  placeholder,
}: CustomInputProps) => {
  return (
    <Fragment>
      {/*// @ts-ignore*/}
      <Input
        type={`${show ? type : "password"}`}
        color={color}
        size={size}
        variant={variant}
        label={label}
        error={!!(error && error !== "")}
        success={success}
        icon={icon}
        onChange={onChange}
        className={className}
        name={name}
        placeholder={placeholder}
      />

      {error && (
        <CustomTypography
          variant="small"
          weight="normal"
          className="mt-2 flex items-center gap-1 text-red-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="-mt-px h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </CustomTypography>
      )}
    </Fragment>
  );
};

export const CustomCheckBox = ({
  color,
  name,
  label,
  onChange,
  className = "",
  icon,
  ripple = true,
  disabled = false,
  rounded = false,
}: CustomCheckBoxProps) => {
  const classes = clsx(`text-[#0E0F17] text-xs text-[#6B7280] ${className}`, {
    "h-4 w-4 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0":
      rounded,
  });

  return (
    <Fragment>
      {/*// @ts-ignore*/}
      <Checkbox
        ripple={ripple}
        icon={icon}
        label={label}
        name={name}
        color={color}
        disabled={disabled}
        className={classes}
        onChange={onChange}
      />
    </Fragment>
  );
};
