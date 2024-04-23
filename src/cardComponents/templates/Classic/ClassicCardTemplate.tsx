import { CardData } from "../../../ts/types";
import { CardFrame } from "../../atoms/CardFrame/CardFrame";
import { CardHolder } from "../../atoms/CardHolder/CardHolder";
import { CardText } from "../../atoms/CardText/CardText";
import { CardArt } from "../../molecules/CardArt/CardArt";
import { CardCredits } from "../../molecules/CardCredits/CardCredits";
import { CardTextBox } from "../../molecules/CardTextBox/CardTextBox";
import { CardHeader } from "../../molecules/Header/CardHeader";
import CardTitle from "../../organisms/CardTitle/CardTitle";
import CardTypes from "../../organisms/CardTypes/CardTypes";

interface ClassicCardTemplateProps extends CardData {}

export const ClassicCardTemplate = ({
  imageSource,
  manaCost,
  title,
  superType,
  type,
  subtypes,
  collection,
  rarity,
  text,
  flavor,
  creatureData,
  artist,
  disclaimer,
}: ClassicCardTemplateProps) => {
  let frameType = "";

  if (type === "Land" || type === "Artifact") {
    frameType = type.toLowerCase();
  } else {
    // Here we determine the frameType based on the card's color identity
  }

  return (
    <CardHolder>
      <CardFrame frameType={frameType}>
        <CardTitle manaCost={manaCost}>{title}</CardTitle>
        <CardArt imageSource={imageSource}></CardArt>
        <CardTypes
          superType={superType}
          type={type}
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
        <CardCredits artist={artist} disclaimer={disclaimer} />
      </CardFrame>
    </CardHolder>
  );
};
