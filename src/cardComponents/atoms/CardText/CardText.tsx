import { HtmlHTMLAttributes, useContext } from "react";
import { CardSizeContext } from "../../../utils/cardSizeContext";
import { constants } from "../../../constants/constants";

interface CardTextProps extends HtmlHTMLAttributes<HTMLDivElement> {
  variant: "Title" | "Content" | "Flavor";
}

export const CardText = ({ variant, children }: CardTextProps) => {
  const { cardSize } = useContext(CardSizeContext);
  const { card } = constants;

  const textStyle =
    variant === "Title"
      ? {
          fontSize: cardSize.width * card.titlePercent,
          fontWeight: "600",
        }
      : variant === "Content"
      ? { fontSize: cardSize.width * card.NormalTextPercent, fontWeight: "400" }
      : variant === "Flavor"
      ? {
          fontSize: cardSize.width * card.NormalTextPercent,
          fontWeight: "400",
          fontStyle: "Italic",
        }
      : {};

  return <div style={textStyle}>{children}</div>;
};
