import { useContext } from "react";
import { CardSizeContext } from "../../../utils/cardSizeContext";
import AbsoluteContainer from "../../atoms/AbosulteContainer/AbsoluteContainer";
import { ContentBorder } from "../../atoms/ContentBorder/ContentBorder";
import "./CardTextBox.css";
import { constants } from "../../../constants/constants";
import { CardText } from "../../atoms/CardText/CardText";

interface CardTextBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  flavor?: string;
  color: string;
}

export const CardTextBox = ({ children, flavor, color }: CardTextBoxProps) => {
  const { cardSize } = useContext(CardSizeContext);
  const { textContainerPaddingPercent, thinBorderPercent } = constants.card;

  return (
    <ContentBorder hideTop color={color}>
      <div
        className={`card-textbox-content card-textbox-${color}`}
        style={{
          padding: cardSize.width * textContainerPaddingPercent,
          border: `${cardSize.width * thinBorderPercent}px solid black`,
        }}
      >
        <CardText variant="Content">{children}</CardText>
        {flavor && (
          <>
            {" "}
            <hr
              className="card-text-separator"
              style={{
                marginBlock: cardSize.width * textContainerPaddingPercent,
                height: cardSize.width * thinBorderPercent,
              }}
            ></hr>
            <CardText variant="Flavor">{flavor}</CardText>{" "}
          </>
        )}
      </div>
    </ContentBorder>
  );
};
