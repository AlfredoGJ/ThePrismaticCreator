import { CardRarity, Option } from "../../../ts/types";
import Field from "../../molecules/Field/Field";
import { Select } from "../../molecules/Select/Select";

interface ExpansionAndRarityProps {
  sets: Option[];
  rarities: Option[];
  expansion: Option;
  rarity: Option;
  onChangeExpansion: (expansion: Option) => void;
  onChangeRarity: (rarity: Option) => void;
}

export const ExpansionAndRarity = ({
  sets,
  rarities,
  expansion,
  rarity,
  onChangeExpansion,
  onChangeRarity,
}: ExpansionAndRarityProps) => {
  console.log("Sets: ", sets);

  return (
    <div className="flex flex-col space-x-1">
      <div className="basis-1/2">
        <Field label="Expansion">
          <Select
            value={expansion}
            name="Expansion"
            options={sets}
            onChange={onChangeExpansion}
          />{" "}
        </Field>
      </div>
      <div className="basis-1/2">
        <Field label="Rarity">
          <Select
            value={rarity}
            name="Rarity"
            options={rarities}
            onChange={onChangeRarity}
          />{" "}
        </Field>
      </div>
    </div>
  );
};
