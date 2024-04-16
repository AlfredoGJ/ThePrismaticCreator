import React, { useContext } from "react";
import "./CardHeader.css";
import { CardSizeContext } from "../../../utils/cardSizeContext";
import { constants } from "../../../constants/constants";
import AbsoluteContainer from "../../atoms/AbosulteContainer/AbsoluteContainer";
import ContentBorder from "../../atoms/ContentBorder/ContentBorder";
import ContentFinish from "../../atoms/ContentFinish/ContentFinish";

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
  top = 0.03,
  left = 0.03,
  right = 0.03,
  bottom = 0.03,
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
    <AbsoluteContainer
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      height={height}
    >
      <Border xBorderRadius={0.5} yBorderRadius={0.15}>
        <ContentFinish
          color={color}
          type={finish}
          xBorderRadius={0.5}
          yBorderRadius={0.13}
        >
          <div
            className="card-header-content"
            style={{
              padding: cardSize.width * textContainerPaddingPercent,
              justifyContent: textAlign,
              backgroundColor: color,
            }}
          >
            {children}
          </div>
        </ContentFinish>
      </Border>
    </AbsoluteContainer>
  );
};
