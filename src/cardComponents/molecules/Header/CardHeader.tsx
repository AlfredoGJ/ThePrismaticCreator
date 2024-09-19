import React, { useContext } from "react";
import "./CardHeader.css";
import { CardSizeContext } from "../../../utils/cardSizeContext";
import { constants } from "../../../constants/constants";
import AbsoluteContainer from "../../atoms/AbosulteContainer/AbsoluteContainer";
import { ContentBorder } from "../../atoms/ContentBorder/ContentBorder";
import { ContentFinish } from "../../atoms/ContentFinish/ContentFinish";

interface CardHeaderPorps extends React.HTMLAttributes<HTMLDivElement> {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  height?: number;
  hasColorBorder?: boolean;
  textAlign?: "center" | "space-between" | "right";
  color: string;
  finish: "emboss" | "embed";
}

export const CardHeader = ({
  children,
  // top = 0.02,
  // left = 0.015,
  // right = 0.015,
  // bottom = 0.03,
  height = 0.109,
  hasColorBorder,
  textAlign = "space-between",
  color,
  finish = "emboss",
}: CardHeaderPorps) => {
  const { cardSize } = useContext(CardSizeContext);
  const {
    headerBorderPercent,
    thinBorderPercent,
    textContainerPaddingPercent,
  } = constants.card;

  const Border = hasColorBorder ? ContentBorder : React.Fragment;

  return (
    // <AbsoluteContainer
    //   top={top}
    //   left={left}
    //   right={right}
    //   bottom={bottom}
    //   height={height}
    // >
      <Border xBorderRadius={0.5} yBorderRadius={0.15} color={color}>
        <ContentFinish
          color={color}
          type={finish}
          xBorderRadius={0.5}
          yBorderRadius={0.16}
        >
          <div
            className={`card-header-content card-header-${color}`}
            style={{
              padding: cardSize.width * textContainerPaddingPercent,
              justifyContent: textAlign,
            }}
          >
            {children}
          </div>
        </ContentFinish>
      </Border>
    // </AbsoluteContainer>
  );
};
