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
}

export default function ({
  children,
  xBorderRadius,
  yBorderRadius,
  type = "emboss",
  color,
}: ContentFinishProps) {
  const { cardSize } = useContext(CardSizeContext);
  const { headerBorderPercent, thinBorderPercent } = constants.card;

  const style: CSSProperties = {
    ...(type === "emboss" && {
      padding: `${cardSize.width * headerBorderPercent}px`,
      border: `${cardSize.width * thinBorderPercent}px solid black`,
      borderRadius: `${yBorderRadius! * cardSize.width}px / ${
        xBorderRadius! * cardSize.width
      }px`,
      background: `linear-gradient(2deg, black, ${color})`,
    }),
    ...(type === "embed" && {
      padding: `${cardSize.width * headerBorderPercent}px`,
      border: `${cardSize.width * headerBorderPercent}px outset gray`,
      borderRadius: `${yBorderRadius! * cardSize.width}px / ${
        xBorderRadius! * cardSize.width
      }px`,
      background: `linear-gradient(50deg, ${color}, black)`,
    }),
  };

  return (
    <div className="content-finish-emboss" style={style}>
      {children}
    </div>
  );
}
