import { createSlice } from "@reduxjs/toolkit";

export interface IAbilitiesAndFlavorState {
  cardText: string;
  cardFlavor: string;
}

const initialState: IAbilitiesAndFlavorState = {
  cardText: "",
  cardFlavor: "",
};

export const abilitiesAndFlavorSlice = createSlice({
  name: "expansionAndRarity",
  initialState,
  reducers: {
    changeCardText: (state, action) => {
      state.cardText = action.payload;
    },
    changeCardFlavor: (state, action) => {
      state.cardFlavor = action.payload;
    },
  },
});

export const { changeCardText, changeCardFlavor } =
  abilitiesAndFlavorSlice.actions;

export default abilitiesAndFlavorSlice.reducer;
