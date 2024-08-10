import { useState } from "react";
import { CardSuperType, CardType, Option } from "../../../ts/types";
import Textbox from "../../atoms/Textbox/Textbox";
import Field from "../../molecules/Field/Field";
import { Select } from "../../molecules/Select/Select";

interface ITypesProps {
  cardSupertypeOptions: string[];
  cardTypeOptions: string[];
  cardSubtypes: string;
  cardTypes: CardType[];
  cardSupertype: CardSuperType;
  onChangeSupertype: (value: string) => void;
  onChangeTypes: (value: string[]) => void;
  onChangeSubtypes: (value: string) => void;
}

export const Typing = ({
  cardSubtypes,
  cardTypes,
  cardSupertype,
  cardSupertypeOptions,
  cardTypeOptions,
  onChangeSupertype,
  onChangeTypes,
  onChangeSubtypes,
}: ITypesProps) => {
  return (
    <>
      <div className="flex flex-row space-x-1">
        <div className="basis-1/2">
          <Field label="Supertype">
            <Select
              compareBy="id"
              value={{ name: cardSupertype, id: cardSupertype }}
              name="Supertype"
              options={[
                ...cardSupertypeOptions.map((superType) => ({
                  name: superType,
                  id: superType,
                })),
                { name: "None", id: "None" },
              ]}
              onChange={(value: Option) =>  onChangeSupertype(value.name)}
            />
          </Field>
        </div>
        <div className="basis-1/2">
          <Field label="Type">
            <Select
              compareBy="id"
              multiple
              value={cardTypes.map((type) => ({
                name: type,
                id: type,
              }))}
              name="Type"
              options={cardTypeOptions.map((type) => ({
                name: type,
                id: type,
              }))}
              onChange={(values: Option[]) =>
                onChangeTypes(values.map((v) => v.name))
              }
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
