import { createSlice } from "@reduxjs/toolkit";
import { CardRarity, Option } from "../../ts/types";

export interface TypingState {
  expansion: Option;
  rarity: Option;
}

const initialState: TypingState = {
  expansion: { id: "base1", name: "Base Set" },
  rarity: { id: "common", name: "Common" },
};

export const expansionAndRaritySlice = createSlice({
  name: "expansionAndRarity",
  initialState,
  reducers: {
    changeExpansion: (state, action) => {
      state.expansion = action.payload;
    },
    changeRarity: (state, action) => {
      state.rarity = action.payload;
    },
  },
});

export const { changeExpansion, changeRarity } =
  expansionAndRaritySlice.actions;

export default expansionAndRaritySlice.reducer;
