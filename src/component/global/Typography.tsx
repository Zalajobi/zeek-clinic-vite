import { Typography } from "@material-tailwind/react";
import clsx from "clsx";
import { Fragment, ReactNode } from "react";
import { asType, color } from "@material-tailwind/react/types/components/typography";
import {
  lineClamp,
  textAlign,
  textBreak,
  textDecoration,
  textFontStyle,
  textFontVariantNumeric,
  textIndent,
  textOverflow,
  textSize,
  textSpacing,
  textStyle,
  textTransform,
  textWeight,
  textWhiteSpace,
  textWrap,
} from "@type/class.types";
import {
  fontWeightClassMap,
  textAlignClassMap,
  textBreakClassMap,
  textIndentClassMap,
  textLineClampClassMap,
  textOverflowClassMap,
  textSizeClassMap,
  textSpacingClassMap,
  textWhiteSpaceClassMap,
  textWrapClassMap,
} from "@util/classMaps";
import CountUp from "react-countup";

interface CustomTypographyProps {
  children: ReactNode;
  variant: asType;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  size?: textSize;
  weight?: textWeight;
  isLoading?: boolean;
  className?: string;
  textStyle?: textStyle;
  textSpacing?: textSpacing;
  textIndent?: textIndent;
  transform?: textTransform;
  decoration?: textDecoration;
  textBreak?: textBreak;
  textOverflow?: textOverflow;
  align?: textAlign;
  whitespace?: textWhiteSpace;
  wrap?: textWrap;
  style?: textFontStyle;
  numericVariant?: textFontVariantNumeric;
  lineClamp?: lineClamp;
  skeletonClassName?: string;
  isVariant?: boolean;
  onClick?: () => void;
  color?: color;
}

interface TypographySkeletonProps {
  className?: string;
}

interface IntegerTypographyProps extends CustomTypographyProps{
  children: number;
  separator: string;
  start?: number;
  decimals?: number;
  delay?: number;
  duration?: number;
  onEnd?: () => void;
  onStart?: () => void;
  prefix?: string;
  suffix?: string;
}

export const CustomTypography = ({
  children,
  size,
  variant,
  style,
  weight,
  align,
  textSpacing,
  textIndent,
  transform,
  decoration,
  textBreak,
  textOverflow,
  whitespace,
  wrap,
  numericVariant,
  lineClamp,
  iconBefore,
  iconAfter,
  isLoading,
  isVariant = false,
  skeletonClassName = "",
  className = "",
  onClick,
  color,
}: CustomTypographyProps) => {
  const classes = clsx(
    `text-[#0E0F17] text-xs text-[#6B7280] font-nunito ${className}`,
    {
      "leading-[44px] tracking-tight text-5xl font-bold": variant === "h1",
      "leading-[35px] tracking-normal text-4xl font-semibold": variant === "h2",
      "leading-[30px] tracking-wide text-3xl font-medium": variant === "h3",
      "leading-[26px] text-2xl font-normal": variant === "h4",
      "leading-[24px] text-xl font-light": variant === "h5",
      "leading-[21px] text-lg font-thin": variant === "h6",
      "leading-[21px] text-base font-normal": variant === "p",
      "text-[#0E0F17] text-sm font-light": variant === "small",
    },
    size ? textSizeClassMap[size] : "",
    style,
    weight ? fontWeightClassMap[weight] : "",
    align ? textAlignClassMap[align] : "",
    textSpacing ? textSpacingClassMap[textSpacing] : "",
    textIndent ? textIndentClassMap[textIndent] : "",
    transform,
    decoration,
    textBreak ? textBreakClassMap[textBreak] : "",
    textOverflow ? textOverflowClassMap[textOverflow] : "",
    whitespace ? textWhiteSpaceClassMap[whitespace] : "",
    lineClamp ? textLineClampClassMap[lineClamp] : "",
    wrap ? textWrapClassMap[wrap] : "",
    numericVariant,
  );

  return (
    <Fragment>
      {isLoading ? (
        <TypographySkeleton className={skeletonClassName} />
      ) : (
        // @ts-ignore
        <Typography
          className={classes}
          as={variant}
          textGradient={isVariant}
          onClick={onClick}
          color={color}
        >
          {iconBefore} {children} {iconAfter}
        </Typography>
      )}
    </Fragment>
  );
};

export const TypographySkeleton = ({
  className = "",
}: TypographySkeletonProps) => {
  return (
    <p
      className={`ml-3 animate-pulse w-full min-w-[70px] h-4 bg-gray-200 rounded-md dark:bg-gray-700 ${className}`}
    ></p>
  );
};

export const IntegerTypography = ({
  children: value,
  size,
  variant,
  style,
  weight,
  align,
  textSpacing,
  textIndent,
  transform,
  decoration,
  textBreak,
  textOverflow,
  whitespace,
  wrap,
  numericVariant,
  lineClamp,
  isLoading,
  isVariant = false,
  skeletonClassName = "",
  className = "",
  onClick,
  decimals=2,
  separator=",",
  start=0,
  delay=0.4,
  duration=2,
  onEnd,
  onStart,
  prefix="",
  suffix="",
}: IntegerTypographyProps) => {
  const classes = clsx(
    `text-[#0E0F17] text-xs text-[#6B7280] font-nunito ${className}`,
    {
      "leading-[44px] tracking-tight text-5xl font-bold": variant === "h1",
      "leading-[35px] tracking-normal text-4xl font-semibold": variant === "h2",
      "leading-[30px] tracking-wide text-3xl font-medium": variant === "h3",
      "leading-[26px] text-2xl font-normal": variant === "h4",
      "leading-[24px] text-xl font-light": variant === "h5",
      "leading-[21px] text-lg font-thin": variant === "h6",
      "leading-[21px] text-base font-normal": variant === "p",
      "text-[#0E0F17] text-sm font-light": variant === "small",
    },
    size ? textSizeClassMap[size] : "",
    style,
    weight ? fontWeightClassMap[weight] : "",
    align ? textAlignClassMap[align] : "",
    textSpacing ? textSpacingClassMap[textSpacing] : "",
    textIndent ? textIndentClassMap[textIndent] : "",
    transform,
    decoration,
    textBreak ? textBreakClassMap[textBreak] : "",
    textOverflow ? textOverflowClassMap[textOverflow] : "",
    whitespace ? textWhiteSpaceClassMap[whitespace] : "",
    lineClamp ? textLineClampClassMap[lineClamp] : "",
    wrap ? textWrapClassMap[wrap] : "",
    numericVariant,
  );
  console.log({
    value,
  });

  return (
    <Fragment>
      <Fragment>
        {isLoading ? (
          <TypographySkeleton className={skeletonClassName} />
        ) : (
          // @ts-ignore
          <Typography
            className={classes}
            as={variant}
            textGradient={isVariant}
            onClick={onClick}
          >
            <CountUp
              start={start}
              end={value}
              onEnd={onEnd}
              onStart={onStart}
              decimals={decimals}
              separator={separator}
              duration={duration}
              delay={delay}
              prefix={prefix}
              suffix={suffix}
            />
          </Typography>
        )}
      </Fragment>
    </Fragment>
  )
}
