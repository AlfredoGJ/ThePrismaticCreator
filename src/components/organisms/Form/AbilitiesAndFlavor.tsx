import { useState } from "react";
import TextArea from "../../atoms/TextArea/TextArea";
import Textbox from "../../atoms/Textbox/Textbox";
import Field from "../../molecules/Field/Field";
import NumberInput from "../../molecules/NumberInput/NumberInput";

interface IAbilitiesAndFlavorProps {
  cardText: string;
  cardFlavor: string;
  cardPower: number;
  cardToughness: number;
  onChangeCardText: (text: string) => void;
  onChangeCardFlavor: (flavor: string) => void;
  onChangeCardToughness: (toughness: number) => void;
  onChangeCardPower: (toughness: number) => void;
}

export const AbilitiesAndFlavor = ({
  cardFlavor,
  cardText,
  cardPower,
  cardToughness,
  onChangeCardFlavor,
  onChangeCardText,
  onChangeCardToughness,
  onChangeCardPower,
}: IAbilitiesAndFlavorProps) => {
  function handleCardToughnessChange(direction: string) {
    if (direction === "UP") {
      onChangeCardToughness(cardToughness + 1);
    } else {
      if (cardToughness > 0) onChangeCardToughness(cardToughness - 1);
    }
  }

  function handleCardPowerChange(direction: string) {
    if (direction === "UP") {
      onChangeCardPower(cardPower + 1);
    } else {
      if (cardPower > 0) onChangeCardPower(cardPower - 1);
    }
  }

  return (
    <>
      {" "}
      <div className="">
        <Field label="Card Text">
          {/* <Textbox placeholder="Write the card text ant its abilities" /> */}
          <TextArea rows={5} value={cardText} onChangeText={onChangeCardText} />
        </Field>
      </div>
      <div className="">
        <Field label="Flavor">
          <TextArea
            rows={3}
            value={cardFlavor}
            onChangeText={onChangeCardFlavor}
          />
        </Field>
      </div>
      <div className="flex flex-row justify-between ">
        <div className="flex">
          <Field label="Power">
            <NumberInput
              value={cardPower}
              onIncrement={() => handleCardPowerChange("UP")}
              onDecrement={() => handleCardPowerChange("DOWN")}
            />
          </Field>
        </div>
        <div className="flex">
          <Field label="Thouhness">
            <NumberInput
              value={cardToughness}
              onIncrement={() => handleCardToughnessChange("UP")}
              onDecrement={() => handleCardToughnessChange("DOWN")}
            />
          </Field>
        </div>
      </div>
    </>
  );
};
