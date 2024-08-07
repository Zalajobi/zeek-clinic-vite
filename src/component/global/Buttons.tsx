import {Fragment, ReactNode} from "react";
import {Button} from "@material-tailwind/react";
import clsx from "clsx";
import {color, size, variant } from "@material-tailwind/react/types/components/button";

interface CustomButtonProps {
  children: ReactNode;
  colorScheme: "primary" | "secondary" | "success" | "error" | "warning" | "info" | "dark" | "light" | "none";
  variant: variant | undefined;
  size?: size;
  color?: color;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  ripple?: boolean;
  fullWidth?: boolean;
}

interface CustomLinkButtonProps {
  to: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  children: ReactNode;
  colorScheme: "primary" | "secondary" | "success" | "error" | "warning" | "info" | "dark" | "light" | "none";
  variant: variant;
  size?: size;
  color?: color;
  className?: string;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  type?: "button" | "submit" | "reset";
  ripple?: boolean;
  fullWidth?: boolean;
}

export const CustomButton = ({ children, colorScheme, variant, size="md", color, onClick, className="", disabled=false, startIcon, endIcon, type="button", loading=false, ripple=false, fullWidth }: CustomButtonProps) => {
  const colorClasses = {
    primary: "bg-[#1D4ED8] text-white hover:bg-[#1E40AF] active:bg-[#1C3AA9] disabled:bg-[#9CA3AF]",
    secondary: "bg-[#64748B] text-white hover:bg-[#475569] active:bg-[#3B495C] disabled:bg-[#A0AEC0]",
    success: "bg-[#10B981] text-white hover:bg-[#059669] active:bg-[#047857] disabled:bg-[#9CA3AF]",
    error: "bg-[#EF4444] text-white hover:bg-[#DC2626] active:bg-[#B91C1C] disabled:bg-[#FCA5A5]",
    warning: "bg-[#F59E0B] text-white hover:bg-[#D97706] active:bg-[#B45309] disabled:bg-[#FDE68A]",
    info: "bg-[#3B82F6] text-white hover:bg-[#2563EB] active:bg-[#1D4ED8] disabled:bg-[#BFDBFE]",
    dark: "bg-[#111827] text-white hover:bg-[#1F2937] active:bg-[#374151] disabled:bg-[#4B5563]",
    light: "bg-[#F3F4F6] text-white hover:bg-[#E5E7EB] active:bg-[#D1D5DB] disabled:bg-[#F9FAFB]",
    none: undefined,
  };
  const classes = clsx(`flex ${className}`, colorClasses[colorScheme]);

  return (
    <Fragment>
      {/*// @ts-ignore*/}
      <Button
        color={color}
        size={size}
        onClick={onClick}
        disabled={disabled}
        type={type}
        variant={variant}
        className={classes}
        loading={loading}
        ripple={ripple}
        fullWidth={fullWidth}
      >
        {startIcon}

        {children}

        {endIcon}
      </Button>
    </Fragment>
  )
}

export const CustomLinkButton = ({to, target="_self", children, colorScheme, variant, size, color, className, disabled, startIcon, endIcon, type, ripple, fullWidth}: CustomLinkButtonProps) => {
  const colorClasses = {
    primary: "bg-[#1D4ED8] text-white hover:bg-[#1E40AF] active:bg-[#1C3AA9] disabled:bg-[#9CA3AF]",
    secondary: "bg-[#64748B] text-white hover:bg-[#475569] active:bg-[#3B495C] disabled:bg-[#A0AEC0]",
    success: "bg-[#10B981] text-white hover:bg-[#059669] active:bg-[#047857] disabled:bg-[#9CA3AF]",
    error: "bg-[#EF4444] text-white hover:bg-[#DC2626] active:bg-[#B91C1C] disabled:bg-[#FCA5A5]",
    warning: "bg-[#F59E0B] text-white hover:bg-[#D97706] active:bg-[#B45309] disabled:bg-[#FDE68A]",
    info: "bg-[#3B82F6] text-white hover:bg-[#2563EB] active:bg-[#1D4ED8] disabled:bg-[#BFDBFE]",
    dark: "bg-[#111827] text-white hover:bg-[#1F2937] active:bg-[#374151] disabled:bg-[#4B5563]",
    light: "bg-[#F3F4F6] text-white hover:bg-[#E5E7EB] active:bg-[#D1D5DB] disabled:bg-[#F9FAFB]",
    none: undefined,
  };
  const classes = clsx(`flex ${className}`, colorClasses[colorScheme]);

  return (
    <Fragment>
      <a href={to} target={target}>
        {/*// @ts-ignore*/}
        <Button
          color={color}
          size={size}
          disabled={disabled}
          type={type}
          variant={variant}
          className={classes}
          ripple={ripple}
          fullWidth={fullWidth}
        >
          {startIcon}

          {children}

          {endIcon}
        </Button>
      </a>
    </Fragment>
  )
}
