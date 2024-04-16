import { useCallback, useState } from "react";
import { Option } from "../ts/types";

export default function useSelect(options: Array<Option>, multiple: boolean) {
  const [selectOptions, setOptions] = useState(options);
  const [selected, setSelected] = useState<Record<string, Option>>({});

  const handleSelection = useCallback(
    (option: Option) => {
      let value = option.id;
      if (multiple) {
        if (selected[value]) {
          delete selected[value];
          setSelected({ ...selected });
        } else {
          selected[value] = option;
          setSelected({ ...selected });
        }
      } else {
        const currentSelected = Object.keys(selected)[0];
        delete selected[currentSelected];
        selected[value] = option;
        setSelected({ ...selected });
      }
    },
    [selected]
  );

  return { selected, handleSelection };
}
