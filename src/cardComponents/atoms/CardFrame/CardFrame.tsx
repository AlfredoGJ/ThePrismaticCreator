import { useRef, useContext, useCallback } from "react";
import "./CardFrame.css";
import { CardSizeContext } from "../../../utils/cardSizeContext";
import { constants } from "../../../constants/constants";
import { TwoColorIdentityEnum } from "../../../ts/types";

interface CardFramePorps extends React.HTMLAttributes<HTMLDivElement> {
  frameType: string;
}

export const CardFrame = ({ children, frameType = "land" }: CardFramePorps) => {
  const { cardSize } = useContext(CardSizeContext);
  const { frameTopBorderRadiusPercent: frameTopBorderRadiusPcnt } =
    constants.card;

  return (
    <div
      className={`card-frame card-frame-${frameType.toLowerCase()}`}
      style={{ borderRadius: `${cardSize.width * frameTopBorderRadiusPcnt}px` }}
    >
      {children}
    </div>
  );
};
