import Icon from "../../atoms/Icon/Icon";
import Textbox from "../../atoms/Textbox/Textbox";
import { ReactComponent as Chevron } from "../../../assets/svg/chevron.svg";
import Button from "../../atoms/Button/Button";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface NumberInputProps extends React.InputHTMLAttributes<String> {}

export default function NumberInput({}: NumberInputProps) {
  const [value, setValue] = useState(0);

  function handleIncrement() {
    setValue(value + 1);
  }

  function handleDecrement() {
    if (value) setValue(value - 1);
  }

  return (
    <div className="flex flex-row border border-black rounded-full bg-zinc-900">
      <div className="flex flex-row justify-center">
        <Button size="sm" shape="leftHalf" onClick={handleDecrement}>
          <ChevronLeftIcon width={24}/>
        </Button>
      </div>
      <div className="grid">
        <Textbox value={value} Size="sm" textAlignment="center" border="none" />
      </div>
      <div className="flex flex-row justify-center">
        <Button size="sm" shape="rightHalf" onClick={handleIncrement}>
        <ChevronRightIcon width={24}/>
        </Button>
      </div>
    </div>
  );
}
