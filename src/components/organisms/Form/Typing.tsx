import { useState } from "react";
import { CardSuperType, CardType, Option } from "../../../ts/types";
import Textbox from "../../atoms/Textbox/Textbox";
import Field from "../../molecules/Field/Field";
import { Select } from "../../molecules/Select/Select";

interface ITypesProps {
  cardSupertypeOptions: string[];
  cardTypeOptions: string[];
  cardSubtypes: string;
  cardType: CardType;
  cardSupertype: CardSuperType;
  onChangeSupertype: (value: string) => void;
  onChangeType: (value: string) => void;
  onChangeSubtypes: (value: string) => void;
}

export const Typing = ({
  cardSubtypes,
  cardType,
  cardSupertype,
  cardSupertypeOptions,
  cardTypeOptions,
  onChangeSupertype,
  onChangeType,
  onChangeSubtypes,
}: ITypesProps) => {
  const [type, setType] = useState("");
  const [syperType, setSuperType] = useState("");
  const [subTypes, setSubTypes] = useState("");

  return (
    <>
      <div className="flex flex-row space-x-1">
        <div className="basis-1/2">
          <Field label="Supertype">
            <Select
              value={{ name: cardSupertype, id: cardSupertype }}
              name="Supertype"
              options={cardSupertypeOptions.map((superType) => ({
                name: superType,
                id: superType,
              }))}
              onChange={(value: Option) => onChangeSupertype(value.name)}
            />
          </Field>
        </div>
        <div className="basis-1/2">
          <Field label="Type">
            <Select
              value={{ name: cardType, id: cardType }}
              name="Type"
              options={cardTypeOptions.map((type) => ({
                name: type,
                id: type,
              }))}
              onChange={(value: Option) => onChangeType(value.name)}
            />{" "}
          </Field>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-full">
          <Field label="Subtypes">
            <Textbox
              placeholder="Subtypes"
              value={cardSubtypes}
              onChange={(evt) => onChangeSubtypes(evt.target.value)}
            />
          </Field>
        </div>
      </div>
    </>
  );
};
