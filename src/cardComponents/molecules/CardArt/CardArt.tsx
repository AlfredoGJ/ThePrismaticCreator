import { useContext } from "react";
import "./CardArt.css";
import { CardSizeContext } from "../../../utils/cardSizeContext";
import { constants } from "../../../constants/constants";
import AbsoluteContainer from "../../atoms/AbosulteContainer/AbsoluteContainer";
import {ContentBorder} from "../../atoms/ContentBorder/ContentBorder";
import {ColorIdentityEnum} from "../../../ts/types";

interface CardFramePorps extends React.HTMLAttributes<HTMLDivElement> {
  imageSource: string;
  colorIdentity:ColorIdentityEnum
}


export const CardArt = ({ children, imageSource, colorIdentity }: CardFramePorps) => {
  const { cardSize } = useContext(CardSizeContext);
  const { thinBorderPercent } = constants.card;

  console.log("Current Card Size", cardSize);
  return (
    <AbsoluteContainer
      top={0.125}
      left={0.03}
      right={0.03}
      bottom={0.4}
      height={0.62}
    >
      <ContentBorder hideTop color={colorIdentity.toLowerCase()}>
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
    </AbsoluteContainer>
  );
};
