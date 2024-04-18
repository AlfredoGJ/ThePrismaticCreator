import { useState } from "react";
import TextArea from "../../atoms/TextArea/TextArea";
import Textbox from "../../atoms/Textbox/Textbox";
import Field from "../../molecules/Field/Field";

interface IAbilitiesAndFlavorProps {
  cardText: string;
  cardFlavor: string;
  onChangeCardText: (text: string) => void;
  onChangeCardFlavor: (flavor: string) => void;
}

export const AbilitiesAndFlavor = ({
  cardFlavor,
  cardText,
  onChangeCardFlavor,
  onChangeCardText,
}: IAbilitiesAndFlavorProps) => {
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
      </div>{" "}
    </>
  );
};
