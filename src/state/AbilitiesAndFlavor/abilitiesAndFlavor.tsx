import { createSlice } from "@reduxjs/toolkit";

export interface IAbilitiesAndFlavorState {
  cardText: string;
  cardFlavor: string;
  cardPower: number;
  cardToughness: number;
}

const initialState: IAbilitiesAndFlavorState = {
  cardText: "",
  cardFlavor: "",
  cardPower: 0,
  cardToughness: 0,
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
    changeCardToughness: (state, action) => {
      state.cardToughness = action.payload;
    },
    changeCardPower: (state, action) => {
      state.cardPower = action.payload;
    },
  },
});

export const {
  changeCardText,
  changeCardFlavor,
  changeCardPower,
  changeCardToughness,
} = abilitiesAndFlavorSlice.actions;

export default abilitiesAndFlavorSlice.reducer;
