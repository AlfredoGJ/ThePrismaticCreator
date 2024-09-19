import {
  BaseSyntheticEvent,
  Children,
  cloneElement,
  ReactElement,
  useState,
} from "react";

interface IButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const ButtonGroup = ({ children }: IButtonGroupProps) => {
  const [activeButton, setActiveButton] = useState("None");

  const buttons: Array<ReactElement> = [];

  function handleButtonClick(buttonKey: string) {
    setActiveButton(buttonKey);
    console.log(buttonKey);
  }

  Children.map(children, (child) => {
    let c = child as ReactElement;
    console.log(child);
    const el = cloneElement(c, {
      key: c.key,
      onClick: (e: BaseSyntheticEvent) => handleButtonClick(c.key!),
      shape:"square",
      color:"secondary",
      variant: c.key === activeButton ? "contained" : "outlined",
    });
    buttons.push(el);
  });
  return <div>{buttons}</div>;
};

export default ButtonGroup;
