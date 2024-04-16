import { useContext } from "react";
import { CardSizeContext } from "../../../utils/cardSizeContext";
import { constants } from "../../../constants/constants";

interface CardFramePorps extends React.HTMLAttributes<HTMLDivElement> {
  height?: number;
  width?: number;
  hideTop?: boolean;
  xBorderRadius?: number;
  yBorderRadius?: number;
}

export default function ({
  children,
  height,
  xBorderRadius,
  yBorderRadius,
  hideTop,
}: CardFramePorps) {
  const { cardSize } = useContext(CardSizeContext);
  const { headerBorderPercent } = constants.card;
  const borderSize = cardSize.width * headerBorderPercent;

  const paddingTop = hideTop ? "0" : borderSize;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(80deg, green, white)",
        padding: `${paddingTop}px ${borderSize}px ${borderSize}px ${borderSize}px`,
        borderRadius: `${yBorderRadius! * cardSize.width}px / ${
          xBorderRadius! * cardSize.width
        }px`,
      }}
    >
      {children}
    </div>
  );
}
