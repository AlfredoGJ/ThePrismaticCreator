import { useContext } from "react";
import { CardHeader } from "../../molecules/Header/CardHeader";
import { CardSizeContext } from "../../../utils/cardSizeContext";
import { constants } from "../../../constants/constants";
import { CardText } from "../../atoms/CardText/CardText";

interface CardTypesProps {
  types: string[];
  subTypes: string[];
  collection: string;
  rarity: string;
}

const CardTypes = ({ types, subTypes, collection, rarity }: CardTypesProps) => {
  const { cardSize } = useContext(CardSizeContext);
  const { card } = constants;
  return (
    <CardHeader color="green" finish="emboss" hasColorBorder top={0.69}>
      <CardText variant="Title">
        {types.map((type) => `${type} `)}
        {subTypes.length && "—"}
        {subTypes.map((subtype) => ` ${subtype} `)}
      </CardText>
      <i
        style={{ fontSize: cardSize.width * card.collectionSymbolPercent }}
        className={`ss ss-${collection} ss-grad ss-fw ss-${rarity.toLocaleLowerCase()}`}
      ></i>
    </CardHeader>
  );
};

export default CardTypes;
