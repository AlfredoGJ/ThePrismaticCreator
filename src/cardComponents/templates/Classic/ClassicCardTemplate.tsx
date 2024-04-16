import { CardData } from "../../../ts/types";
import CardFrame from "../../atoms/CardFrame/CardFrame";
import { CardHolder } from "../../atoms/CardHolder/CardHolder";
import { CardText } from "../../atoms/CardText/CardText";
import {CardArt} from "../../molecules/CardArt/CardArt";
import { CardTextBox } from "../../molecules/CardTextBox/CardTextBox";
import { CardHeader } from "../../molecules/Header/CardHeader";
import CardTitle from "../../organisms/CardTitle/CardTitle";
import CardTypes from "../../organisms/CardTypes/CardTypes";

interface ClassicCardTemplateProps extends CardData {}

export const ClassicCardTemplate = ({
  imageSource,
  manaCost,
  title,
  types,
  subtypes,
  collection,
  rarity,
  text,
  flavor,
  creatureData,
}: ClassicCardTemplateProps) => {
  return (
    <CardHolder>
      <CardFrame>
        <CardTitle manaCost={manaCost}>{title}</CardTitle>
        <CardArt imageSource={imageSource}></CardArt>
        <CardTypes
          types={types}
          subTypes={subtypes}
          collection={collection}
          rarity={rarity}
        />
        <CardTextBox flavor={flavor}>{text}</CardTextBox>
        {creatureData && (
          <CardHeader
            color="gray"
            finish="embed"
            bottom={0.02}
            right={0.03}
            top={1.135}
            left={0.7}
            height={0.09}
            textAlign="center"
          >
            <CardText variant="Title">{`${creatureData.power}/${creatureData.toughness} `}</CardText>
          </CardHeader>
        )}
      </CardFrame>
    </CardHolder>
  );
};
