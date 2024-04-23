import Textbox from "../../atoms/Textbox/Textbox";
import { ReactComponent as Chevron } from "../../../assets/svg/chevron.svg";
import Button from "../../atoms/Button/Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface NumberInputProps extends React.InputHTMLAttributes<String> {
  onIncrement?: () => void;
  onDecrement?: () => void;
  value?: number;
}

export default function NumberInput({
  onIncrement,
  onDecrement,
  value,
}: NumberInputProps) {
  function handleDecrement() {
    if (onDecrement) onDecrement();
  }

  function handleIncrement() {
    if (onIncrement) onIncrement();
  }

  return (
    <div className="flex flex-row border border-black rounded-full bg-zinc-900">
      <div className="flex flex-row justify-center">
        <Button size="sm" shape="leftHalf" onClick={handleDecrement}>
          <ChevronLeftIcon width={24} />
        </Button>
      </div>
      <div className="grid">
        <Textbox value={value} Size="sm" textAlignment="center" border="none" />
      </div>
      <div className="flex flex-row justify-center">
        <Button size="sm" shape="rightHalf" onClick={handleIncrement}>
          <ChevronRightIcon width={24} />
        </Button>
      </div>
    </div>
  );
}
