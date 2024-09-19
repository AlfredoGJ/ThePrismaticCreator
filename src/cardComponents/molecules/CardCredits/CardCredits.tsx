import { useContext } from "react";
import { CardSizeContext } from "../../../utils/cardSizeContext";
import AbsoluteContainer from "../../atoms/AbosulteContainer/AbsoluteContainer";
import { ContentBorder } from "../../atoms/ContentBorder/ContentBorder";
import "./CardCredits.css";
import { constants } from "../../../constants/constants";
import { CardText } from "../../atoms/CardText/CardText";

interface CardCreditsProps extends React.HTMLAttributes<HTMLDivElement> {
  artist: string;
  disclaimer: string;
}

export const CardCredits = ({
  children,
  artist,
  disclaimer,
}: CardCreditsProps) => {
  const { cardSize } = useContext(CardSizeContext);
  const { NormalTextPercent, SmallTextPercent } = constants.card;

  return (
    <div
      className="credits-container"
      style={{
        fontSize: cardSize.width * NormalTextPercent,
      }}
    >
      <p className="credits-artist">
        <i
          className="ms ms-artist-brush ms-2x ms-fw"
          style={{ lineHeight: "60%" }}
        >
          {" "}
        </i>

        <b
          style={{
            lineHeight: "95%",
            paddingLeft: cardSize.width * SmallTextPercent * 0.4,
          }}
        >
          {artist}
        </b>
      </p>
      <div
        className="credits-disclaimer"
        style={{ fontSize: cardSize.width * SmallTextPercent }}
      >
        {disclaimer}
      </div>
    </div>
  );
};
