import { useContext } from "react";
import "./CardArt.css";
import { CardSizeContext } from "../../../utils/cardSizeContext";
import { constants } from "../../../constants/constants";
import { ContentBorder } from "../../atoms/ContentBorder/ContentBorder";
import { ColorIdentityEnum } from "../../../ts/types";

interface CardFramePorps extends React.HTMLAttributes<HTMLDivElement> {
  imageSource: string;
  colorIdentity: ColorIdentityEnum;
  hideTopBorder?: boolean;
  hideBottomBorder?: boolean;
  hideLeftBorder?: boolean;
  hideRightBorder?: boolean;
}

export const CardArt = ({
  children,
  imageSource,
  colorIdentity,
  hideBottomBorder,
  hideLeftBorder,
  hideRightBorder,
  hideTopBorder,
}: CardFramePorps) => {
  const { cardSize } = useContext(CardSizeContext);
  const { thinBorderPercent } = constants.card;

  console.log("Current Card Size", cardSize);
  return (
    <ContentBorder
      hideTop={hideTopBorder}
      hideBottom={hideBottomBorder}
      hideLeft={hideLeftBorder}
      hideRight={hideRightBorder}
      color={colorIdentity.toLowerCase()}
    >
      <div
        className="card-art card-art-regular"
        style={{
          border: `${cardSize.width * thinBorderPercent}px solid black`,
        }}
      >
        <img src={imageSource} className="card-art-img" alt="CardImage">
          {children}
        </img>
      </div>
    </ContentBorder>
  );
};
