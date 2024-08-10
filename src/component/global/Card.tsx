import { Fragment, ReactNode } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@material-tailwind/react";
import { color, variant } from "@material-tailwind/react/types/components/card";

interface CustomCardProps {
  children: ReactNode;
  cardClass?: string;
  headerClass?: string;
  bodyClass?: string;
  footerClass?: string;
  variant?: variant;
  headerVariant?: variant;
  color?: color;
  headerColor?: color;
  bodyColor?: color;
  footerColor?: color;
  floated?: boolean;
  shadow?: boolean;
  headerShadow?: boolean;
  footerDivider?: boolean;
}

export const CustomCard = ({
  children,
  cardClass = "",
  headerClass = "",
  bodyClass = "",
  footerClass = "",
  variant = "filled",
  headerVariant = "filled",
  color,
  headerColor,
  bodyColor,
  footerColor,
  floated = false,
  shadow = false,
  headerShadow = false,
  footerDivider = false,
}: CustomCardProps) => {
  return (
    <Fragment>
      {/*// @ts-ignore*/}
      <Card
        className={`w-96 ${cardClass}`}
        variant={variant}
        color={color}
        shadow={shadow}
      >
        {/*// @ts-ignore*/}
        <CardHeader
          floated={floated}
          className={`${headerClass}`}
          color={headerColor}
          shadow={headerShadow}
          variant={headerVariant}
        ></CardHeader>

        {/*// @ts-ignore*/}
        <CardBody className={`${bodyClass}`} color={bodyColor}>
          {children}
        </CardBody>

        {/*// @ts-ignore*/}
        <CardFooter
          className={`${footerClass}`}
          color={footerColor}
          divider={footerDivider}
        ></CardFooter>
      </Card>
    </Fragment>
  );
};

export const DefaultCard = ({
  children,
  color,
  cardClass,
  variant = "filled",
  shadow = false,
}: CustomCardProps) => {
  return (
    <Fragment>
      {/*// @ts-ignore*/}
      <Card
        className={`w-96 ${cardClass}`}
        variant={variant}
        color={color}
        shadow={shadow}
      >
        {children}
      </Card>
    </Fragment>
  );
};
