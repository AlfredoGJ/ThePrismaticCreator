import {
  CardData,
  MonoColorIdentityEnum,
  TwoColorIdentityEnum,
} from "../../../ts/types";
import { getColorIdentityFromManaCost } from "../../../utils/manaCostConversions";
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

  let colorIdentity = getColorIdentityFromManaCost(manaCost);

  console.log("ColorIdentity:", colorIdentity);
  if (type === "Land" || type === "Artifact") {
    frameType = type.toLowerCase();
  } else {
    if (colorIdentity in TwoColorIdentityEnum) frameType = "Multicolor";
    else frameType = colorIdentity;
  }

  console.log("FrameTypeHere:", frameType);

  return (
    <CardHolder>
      <CardFrame frameType={frameType}>
        <CardTitle manaCost={manaCost} colorIdentity={colorIdentity}>
          {title}
        </CardTitle>
        <CardArt imageSource={imageSource} colorIdentity={colorIdentity}></CardArt>
        <CardTypes
          superType={superType}
          type={type}
          subTypes={subtypes}
          collection={collection}
          rarity={rarity}
          colorIdentity={colorIdentity}
        />
        <CardTextBox flavor={flavor} color={colorIdentity.toLowerCase()}>{text}</CardTextBox>
        {creatureData && (
          <CardHeader
            color={colorIdentity.toLowerCase()}
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
