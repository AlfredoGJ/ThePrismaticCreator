import { createSlice } from "@reduxjs/toolkit";

export interface IArtistAndDisclaimerState {
  cardArtist: string;
  cardDisclaimer: string;
}

const initialState: IArtistAndDisclaimerState = {
  cardArtist: "",
  cardDisclaimer: "",
};

export const artistAndDisclaimerSlice = createSlice({
  name: "expansionAndRarity",
  initialState,
  reducers: {
    changeCardArtist: (state, action) => {
      state.cardArtist = action.payload;
    },
    changeCardDisclaimer: (state, action) => {
      state.cardDisclaimer = action.payload;
    },
  },
});

export const { changeCardArtist, changeCardDisclaimer } =
  artistAndDisclaimerSlice.actions;

export default artistAndDisclaimerSlice.reducer;
