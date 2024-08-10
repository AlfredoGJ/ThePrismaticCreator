import { useContext } from "react";
import { CardHeader } from "../../molecules/Header/CardHeader";
import { CardSizeContext } from "../../../utils/cardSizeContext";
import { constants } from "../../../constants/constants";
import { CardText } from "../../atoms/CardText/CardText";
import { CardSuperType, CardType } from "../../../ts/types";
import { ColorIdentityEnum } from "../../../ts/types";

interface CardTypesProps {
  superType: CardSuperType;
  types: CardType[];
  subTypes: string;
  collection: string;
  rarity: string;
  colorIdentity:ColorIdentityEnum

}


const CardTypes = ({
  superType,
  types,
  subTypes,
  collection,
  rarity,
  colorIdentity
}: CardTypesProps) => {
  const { cardSize } = useContext(CardSizeContext);
  const { card } = constants;
  return (
    <CardHeader color={colorIdentity.toLowerCase()} finish="emboss" hasColorBorder top={0.74}>
      <CardText variant="Title">
        {superType!== "None" && `${superType} `}
        {types.join(' ')}
        {subTypes.length > 0 && " — "}
        {subTypes.split(" ").map((subtype) => ` ${subtype} `)}
      </CardText>
      <i
        style={{ fontSize: cardSize.width * card.collectionSymbolPercent }}
        className={`ss ss-${collection} ss-grad ss-fw ss-${rarity.toLocaleLowerCase()}`}
      ></i>
    </CardHeader>
  );
};

export default CardTypes;
