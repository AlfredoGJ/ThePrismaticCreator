import { useEffect, useRef, useContext } from "react";
import "./CardFrame.css";
import { CardSizeContext } from "../../../utils/cardSizeContext";
import { constants } from "../../../constants/constants";

interface CardFramePorps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ({ children }: CardFramePorps) {
  const { cardSize } = useContext(CardSizeContext);
  const { frameTopBorderRadiusPercent: frameTopBorderRadiusPcnt } = constants.card;
  return (
    <div
      className="card-frame card-frame-black"
      style={{ borderRadius: `${cardSize.width * frameTopBorderRadiusPcnt}px` }}
    >
      {children}
    </div>
  );
}
