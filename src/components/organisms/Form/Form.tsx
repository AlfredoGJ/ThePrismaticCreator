import Label from "../../atoms/Label/Label";
import Textbox from "../../atoms/Textbox/Textbox";
import Field from "../../molecules/Field/Field";
import { Select } from "../../molecules/Select/Select";
import NumberInput from "../../molecules/NumberInput/NumberInput";
import { Option } from "../../../ts/types";
import FileUpload from "../../molecules/FileUpload/FileUpload";
import { useState } from "react";
import { CardType, CardSuperType } from "../../../ts/types";

interface FormProps {}

export const manaCost = (
  <>
    <Label text="Mana Cost" />
    <div className="flex flex-row flex-wrap">
      <div className="flex basis-1/3 px-2">
        <Field label="Red">
          <NumberInput />
        </Field>
      </div>
      <div className="flex basis-1/3 px-2">
        <Field label="Green">
          <NumberInput />
        </Field>
      </div>
      <div className="flex basis-1/3 px-2">
        <Field label="Black">
          <NumberInput />
        </Field>
      </div>
      <div className="flex basis-1/3 px-2">
        <Field label="Blue">
          <NumberInput />
        </Field>
      </div>
      <div className="flex basis-1/3 px-2">
        <Field label="White">
          <NumberInput />
        </Field>
      </div>
      <div className="flex basis-1/3 px-2">
        <Field label="Colorless">
          <NumberInput />
        </Field>
      </div>
    </div>
  </>
);



export const artistAndDisclaimer = (
  <>
    {" "}
    <div className="">
      <Field label="Artist">
        <Textbox placeholder="Artist" />
      </Field>
    </div>
    <div className="">
      <Field label="Disclaimer">
        <Textbox placeholder="Add some disclaimer e.g: '™ & © 2024 Wizards...  " />
      </Field>
    </div>
  </>
);

export const powerThoughness = (
  <>
    <Label text="Power / Thoughness" />
    <div className="flex flex-row">
      <div className="flex basis-1/4">
        <Field label="Power">
          <NumberInput />
        </Field>
      </div>
      <div className="flex basis-1/4">
        <Field label="Thoughness">
          <NumberInput />
        </Field>
      </div>
    </div>
  </>
);

export default function Form({}: FormProps) {
  return (
    <form className="flex flex-col p-2">
      <div className="">
        <Field label="Name">
          <Textbox placeholder="Name of the card" />
        </Field>
      </div>
      <div className="flex-flex-column p-2 ml-2 mb-1">{manaCost}</div>

      <div className="flex-flex-column p-2 ml-2 mb-1">{powerThoughness}</div>
    </form>
  );
}
