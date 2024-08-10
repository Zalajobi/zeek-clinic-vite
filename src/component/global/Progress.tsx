import { Fragment } from "react";
import {
  color,
  size,
  variant,
} from "@material-tailwind/react/types/components/progress";
import { Progress } from "@material-tailwind/react";
import { CustomTypography } from "@component/global/Typography";

interface BasicProgressProps {
  value: number;
  label: string;
  color?: color;
  size?: size;
  variant?: variant;
  className?: string;
  isLoading?: boolean;
}

export const InlineProgress = ({
  value,
  isLoading = false,
  label,
  size = "md",
  color,
  className = "",
}: BasicProgressProps) => {
  return (
    <Fragment>
      {/*// @ts-ignore*/}
      <Progress
        value={value}
        color={color}
        label={label}
        size={size}
        className={`${isLoading ? "animate-pulse" : ""} ${className}`}
      />
    </Fragment>
  );
};

export const OutlineProgress = ({
  value,
  isLoading = false,
  label,
  size = "md",
  color,
  className = "",
}: BasicProgressProps) => {
  return (
    <Fragment>
      <div className="w-full">
        <div className="mb-2 flex items-center justify-between gap-4">
          <CustomTypography variant="h6" weight="bold" color="blue-gray">
            {label}
          </CustomTypography>

          <CustomTypography variant="h6" weight="bold" color="blue-gray">
            {value}
          </CustomTypography>
        </div>

        {/*// @ts-ignore*/}
        <Progress
          value={value}
          color={color}
          size={size}
          className={`${isLoading ? "animate-pulse" : ""} ${className}`}
        />
      </div>
    </Fragment>
  );
};
