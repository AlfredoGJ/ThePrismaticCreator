import Sets from "../assets/json/Sets.json";
import { Option } from "../ts/types";

export const getSetsOptionList = (): Option[] => {
  return Sets.data
    .filter((set) => set.set_type !== "token")
    .slice(0, 10)
    .map((set) => ({
      id: set.code,
      name: set.name,
    }));
};
