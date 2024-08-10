import { CSSProperties, useContext } from "react";
import { CardSizeContext } from "../../../utils/cardSizeContext";
import { constants } from "../../../constants/constants";
import "./ContentFinish.css";

interface ContentFinishProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: number;
  width?: number;
  hideTop?: boolean;
  xBorderRadius?: number;
  yBorderRadius?: number;
  type: "emboss" | "embed";
  color: string;
  hasShadow?: boolean;
}

export const ContentFinish = ({
  children,
  xBorderRadius,
  yBorderRadius,
  type = "emboss",
  color,
  hasShadow,
}: ContentFinishProps) => {
  const { cardSize } = useContext(CardSizeContext);
  const {
    headerBorderPercent,
    thinBorderPercent,
    PowerToughnessBorderPercent,
  } = constants.card;

  const style: CSSProperties = {
    ...(type === "emboss" && {
      padding: `${cardSize.width * headerBorderPercent}px`,
      border: `${cardSize.width * thinBorderPercent}px solid black`,
      borderRadius: `${yBorderRadius! * cardSize.width}px / ${
        xBorderRadius! * cardSize.width
      }px`,
    }),
    ...(type === "embed" && {
      borderWidth: `${cardSize.width * PowerToughnessBorderPercent}px`,
      borderStyle: "groove",
      borderRadius: `${yBorderRadius! * cardSize.width}px / ${
        xBorderRadius! * cardSize.width
      }px`,
    }),
  };

  return (
    <div
      className={`content-finish-${type} content-finish-${color}`}
      style={style}
    >
      {children}
    </div>
  );
};
