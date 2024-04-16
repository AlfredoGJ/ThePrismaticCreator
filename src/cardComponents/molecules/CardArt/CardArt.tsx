import { useContext } from "react";
import "./CardArt.css";
import { CardSizeContext } from "../../../utils/cardSizeContext";
import { constants } from "../../../constants/constants";
import AbsoluteContainer from "../../atoms/AbosulteContainer/AbsoluteContainer";
import ContentBorder from "../../atoms/ContentBorder/ContentBorder";

interface CardFramePorps extends React.HTMLAttributes<HTMLDivElement> {
  imageSource: string;
}

export const CardArt = ({ children, imageSource }: CardFramePorps) => {
  const { cardSize } = useContext(CardSizeContext);
  const { thinBorderPercent } = constants.card;

  console.log("Current Card Size", cardSize);
  return (
    <AbsoluteContainer
      top={0.1365}
      left={0.045}
      right={0.045}
      bottom={0.4}
      height={0.56}
    >
      <ContentBorder hideTop>
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
