import {
  BasicLandType,
  CardData,
  TwoColorIdentityEnum,
} from "../../../ts/types";
import {
  getColorIdentityFromLandSubtype,
  getColorIdentityFromManaCost,
} from "../../../utils/manaCostConversions";
import AbsoluteContainer from "../../atoms/AbosulteContainer/AbsoluteContainer";
import { CardFrame } from "../../atoms/CardFrame/CardFrame";
import { CardHolder } from "../../atoms/CardHolder/CardHolder";
import { CardText } from "../../atoms/CardText/CardText";
import { CardArt } from "../../molecules/CardArt/CardArt";
import { CardCredits } from "../../molecules/CardCredits/CardCredits";
import { CardTextBox } from "../../molecules/CardTextBox/CardTextBox";
import { CardHeader } from "../../molecules/Header/CardHeader";
import CardTitle from "../../organisms/CardTitle/CardTitle";
import CardTypes from "../../organisms/CardTypes/CardTypes";
import "./ClassicCardTemplate.css";

interface ClassicCardTemplateProps extends CardData {}

export const ClassicCardTemplate = ({
  imageSource,
  manaCost,
  title,
  superType,
  types,
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

  if (types.includes("Land")) {
    frameType = "land";
    colorIdentity = getColorIdentityFromLandSubtype(subtypes.split(" "));
  } else if (types.includes("Artifact")) frameType = "artifact";
  else if (colorIdentity in TwoColorIdentityEnum) frameType = "Multicolor";
  else frameType = colorIdentity;

  console.log("FrameTypeHere:", frameType);

  return (
    <CardHolder>
      <CardFrame frameType={frameType}>
        <div className="card-content">
          <CardTitle manaCost={manaCost} colorIdentity={colorIdentity}>
            {title}
          </CardTitle>
          <div className="card-art-container">
            <CardArt
              hideBottomBorder
              hideTopBorder
              imageSource={imageSource}
              colorIdentity={colorIdentity}
            ></CardArt>
          </div>
          <CardTypes
            superType={superType}
            types={types}
            subTypes={subtypes}
            collection={collection}
            rarity={rarity}
            colorIdentity={colorIdentity}
          />
          <div className="card-textbox-container">
            <CardTextBox flavor={flavor} color={colorIdentity.toLowerCase()}>
              {text}
            </CardTextBox>
          </div>
          <div  className="card-credits-container">
            <CardCredits artist={artist} disclaimer={disclaimer} />
          </div>
        </div>
        <AbsoluteContainer
          bottom={0.02}
          right={0.024}
          top={1.2}
          left={0.7}
          height={0.085}
        >
          {types.includes("Creature") && (
            <CardHeader
              color={colorIdentity.toLowerCase()}
              finish="embed"
              textAlign="center"
            >
              <CardText variant="Title">{`${creatureData!.power}/${
                creatureData!.toughness
              } `}</CardText>
            </CardHeader>
          )}
        </AbsoluteContainer>
      </CardFrame>
    </CardHolder>
  );
};
