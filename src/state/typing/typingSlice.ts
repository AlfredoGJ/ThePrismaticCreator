import { createSlice } from "@reduxjs/toolkit";
import { CardSuperType, CardType } from "../../ts/types";

export interface TypingState {
  superType: CardSuperType;
  types: CardType[];
  subtypes: string;
}

const initialState: TypingState = {
  superType: "Basic",
  types: ["Land"],
  subtypes: "",
};

export const typingSlice = createSlice({
  name: "typing",
  initialState,
  reducers: {
    changeSupertype: (state, action) => {
      state.superType = action.payload;
    },
    changeTypes: (state, action) => {
      state.types = action.payload;
    },
    changeSubtypes: (state, action) => {
      state.subtypes = action.payload;
    },
  },
});

export const { changeSubtypes, changeSupertype, changeTypes } =
  typingSlice.actions;

export default typingSlice.reducer;
