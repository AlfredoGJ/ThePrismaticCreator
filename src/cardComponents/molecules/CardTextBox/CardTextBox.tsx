import { useContext } from "react";
import { CardSizeContext } from "../../../utils/cardSizeContext";
import AbsoluteContainer from "../../atoms/AbosulteContainer/AbsoluteContainer";
import ContentBorder from "../../atoms/ContentBorder/ContentBorder";
import "./CardTextBox.css";
import { constants } from "../../../constants/constants";
import { CardText } from "../../atoms/CardText/CardText";

interface CardTextBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  flavor?: string;
}

export const CardTextBox = ({ children, flavor }: CardTextBoxProps) => {
  const { cardSize } = useContext(CardSizeContext);
  const { textContainerPaddingPercent, thinBorderPercent } = constants.card;

  return (
    <AbsoluteContainer bottom={0.08} height={0.37} left={0.045} right={0.045}>
      <ContentBorder>
        <div
          className="card-textbox-content"
          style={{ padding: cardSize.width * textContainerPaddingPercent }}
        >
          <CardText variant="Content">{children}</CardText>
          <hr
            className="card-text-separator"
            style={{
              marginBlock: cardSize.width * textContainerPaddingPercent,
              height: cardSize.width * thinBorderPercent,
            }}
          ></hr>
          <CardText variant="Flavor">
            {flavor}
          </CardText>
        </div>
      </ContentBorder>
    </AbsoluteContainer>
  );
};
