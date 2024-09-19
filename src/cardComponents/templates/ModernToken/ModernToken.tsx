import { CardData } from "../../../ts/types";
import { getColorIdentityFromManaCost } from "../../../utils/manaCostConversions";
import { CardHolder } from "../../atoms/CardHolder/CardHolder";
import { CardArt } from "../../molecules/CardArt/CardArt";
import { CardCredits } from "../../molecules/CardCredits/CardCredits";
import { CardTextBox } from "../../molecules/CardTextBox/CardTextBox";
import CardTitle from "../../organisms/CardTitle/CardTitle";
import CardTypes from "../../organisms/CardTypes/CardTypes";
import "./ModernToken.css";


interface ModernTokenTemplateProps extends CardData {}

export const ModernTokenTemplate = ({
  title,
  manaCost,
  imageSource,
  superType,
  types,
  subtypes,
  collection,
  rarity,
  flavor,
  text,
  artist,
  disclaimer,
}: ModernTokenTemplateProps) => {
  let colorIdentity = getColorIdentityFromManaCost(manaCost);
  return (
    <CardHolder type="modern">
      <div className="card-content-base">
        <div className="card-image">
          <CardArt
            hideBottomBorder
            hideTopBorder
            hideLeftBorder
            hideRightBorder
            imageSource={imageSource}
            colorIdentity={colorIdentity}
          ></CardArt>
        </div>
        <div className="card-content">
          <CardTitle manaCost={manaCost} colorIdentity={colorIdentity}>
            {title}
          </CardTitle>
          <div></div>
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
          <div className="card-credits-container">
            <CardCredits artist={artist} disclaimer={disclaimer} />
          </div>
        </div>
      </div>
    </CardHolder>
  );
};
