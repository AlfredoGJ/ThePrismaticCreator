import { createSlice } from "@reduxjs/toolkit";
import { ManaCostSymbols } from "../../ts/types";

export interface IManaCostState {
  manaCost: ManaCostSymbols[];
}

const initialState: IManaCostState = {
  manaCost: [],
};

export const manaCostSlice = createSlice({
  name: "manaCost",
  initialState,
  reducers: {
    changeManaCost: (state, action) => {
      state.manaCost = action.payload;
    },
  },
});

export const { changeManaCost } = manaCostSlice.actions;

export default manaCostSlice.reducer;
