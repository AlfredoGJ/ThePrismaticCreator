import React, { useEffect, useState } from "react";
import Label from "../../atoms/Label/Label";
import Field from "../../molecules/Field/Field";
import NumberInput from "../../molecules/NumberInput/NumberInput";
import { ICostQuantity, ManaCostSymbols } from "../../../ts/types";
import { costSymbolsFromNumber, numberFromCostSymbols } from "../../../utils/manaCostConversions";

interface ManaCostProps {
  cardManaCost: ManaCostSymbols[];
  onChangeManaCost: (manaCost: ManaCostSymbols[]) => void;
}

const ManaCost: React.FC<ManaCostProps> = ({
  cardManaCost,
  onChangeManaCost,
}) => {
  const [manaCostQty, setManaCostQty] = useState<ICostQuantity>(
    numberFromCostSymbols(cardManaCost)
  );

  const handleCostChange = (
    operation: "UP" | "DOWN",
    color: keyof ICostQuantity
  ) => {
    let value = manaCostQty[color];
    let newValue =
      operation === "UP"
        ? value + 1
        : operation === "DOWN" && value > 0
        ? value - 1
        : value;
    setManaCostQty({ ...manaCostQty, [color]: newValue });
  };

  useEffect(() => {
    const newManaCost = costSymbolsFromNumber(manaCostQty);
    onChangeManaCost(newManaCost);

  }, [manaCostQty]);

  return (
    <>
      <Label text="Mana Cost" />
      <div className="flex flex-row flex-wrap">
        <div className="flex basis-1/3 px-2">
          <Field label="Red">
            <NumberInput
              value={manaCostQty.red}
              onIncrement={() => handleCostChange("UP", "red")}
              onDecrement={() => handleCostChange("DOWN", "red")}
            />
          </Field>
        </div>
        <div className="flex basis-1/3 px-2">
          <Field label="Green">
            <NumberInput
              value={manaCostQty.green}
              onIncrement={() => handleCostChange("UP", "green")}
              onDecrement={() => handleCostChange("DOWN", "green")}
            />
          </Field>
        </div>
        <div className="flex basis-1/3 px-2">
          <Field label="Black">
            <NumberInput
              value={manaCostQty.black}
              onIncrement={() => handleCostChange("UP", "black")}
              onDecrement={() => handleCostChange("DOWN", "black")}
            />
          </Field>
        </div>
        <div className="flex basis-1/3 px-2">
          <Field label="Blue">
            <NumberInput
              value={manaCostQty.blue}
              onIncrement={() => handleCostChange("UP", "blue")}
              onDecrement={() => handleCostChange("DOWN", "blue")}
            />
          </Field>
        </div>
        <div className="flex basis-1/3 px-2">
          <Field label="White">
            <NumberInput
              value={manaCostQty.white}
              onIncrement={() => handleCostChange("UP", "white")}
              onDecrement={() => handleCostChange("DOWN", "white")}
            />
          </Field>
        </div>
        <div className="flex basis-1/3 px-2">
          <Field label="Colorless">
            <NumberInput
              value={manaCostQty.colorless}
              onIncrement={() => handleCostChange("UP", "colorless")}
              onDecrement={() => handleCostChange("DOWN", "colorless")}
            />
          </Field>
        </div>
      </div>
    </>
  );
};

export default ManaCost;
