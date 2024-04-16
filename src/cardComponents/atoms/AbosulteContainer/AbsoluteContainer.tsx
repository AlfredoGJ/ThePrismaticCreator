import { useContext } from "react";
import { CardSizeContext } from "../../../utils/cardSizeContext";

interface CardFramePorps extends React.HTMLAttributes<HTMLDivElement> {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  height?: number;
}

export default function ({
  children,
  left,
  right,
  top,
  bottom,
  height,
}: CardFramePorps) {
  const { cardSize } = useContext(CardSizeContext);

  return (
    <div
      style={{
        position: "absolute",
        top: `${top! * cardSize.width}px`,
        right: `${right! * cardSize.width}px`,
        left: `${left! * cardSize.width}px`,
        bottom: `${bottom! * cardSize.width}px`,
        height: `${height! * cardSize.width}px`,
      }}
    >
      {children}
    </div>
  );
}
