import Label from "../../atoms/Label/Label";
import Textbox from "../../atoms/Textbox/Textbox";
import Field from "../../molecules/Field/Field";
import FileUpload from "../../molecules/FileUpload/FileUpload";
import { ImageData } from "../../../ts/types";

interface INamingProps {
  name: string;
  image: ImageData;
  onNameChange: (name: string) => void;
  onImageChange: (image: File) => void;
}

export const Naming = ({
  name,
  image,
  onNameChange,
  onImageChange,
}: INamingProps) => {
  return (
    <>
      <Field label="Name">
        <Textbox
          autoComplete="off"
          placeholder="Name of the card"
          value={name}
          onChange={(element) => onNameChange(element.target.value)}
        />
      </Field>
      <Label text="Image" />
      <Field label="Upload Image">
        <FileUpload
          value={image.name}
          onChange={(event) => onImageChange(event.target.files![0])}
        />
      </Field>
    </>
  );
};
