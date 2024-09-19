import { useContext } from "react";
import { CardSizeContext } from "../../../utils/cardSizeContext";
import { constants } from "../../../constants/constants";
import './content-border.css'


interface CardFramePorps extends React.HTMLAttributes<HTMLDivElement> {
  height?: number;
  width?: number;
  hideTop?: boolean;
  hideBottom?: boolean;
  hideLeft?:boolean;
  hideRight?:boolean;
  xBorderRadius?: number;
  yBorderRadius?: number;
  color: string;
}

export  const ContentBorder = ({
  children,
  xBorderRadius,
  yBorderRadius,
  hideTop,
  hideBottom,
  hideRight,
  hideLeft,
  color
}: CardFramePorps) => {
  const { cardSize } = useContext(CardSizeContext);
  const { headerBorderPercent } = constants.card;
  const borderSize = cardSize.width * headerBorderPercent;

  const paddingTop = hideTop ? "0" : borderSize;
  const paddingBottom = hideBottom? "0": borderSize
  const paddingLeft = hideLeft? "0": borderSize
  const paddingRight = hideRight? "0": borderSize

  return (
    <div
    className={`content-border-${color}`}
      style={{
        width: "100%",
        height: "100%",
        padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`,
        borderRadius: `${yBorderRadius! * cardSize.width}px / ${
          xBorderRadius! * cardSize.width
        }px`,
      }}
    >
      {children}
    </div>
  );
}
