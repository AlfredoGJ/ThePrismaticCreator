import { createSlice } from "@reduxjs/toolkit";
import { CardSuperType, CardType } from "../../ts/types";

export interface TypingState {
  superType: CardSuperType;
  type: CardType;
  subtypes: string;
}

const initialState: TypingState = {
  superType: "Basic",
  type: "Land",
  subtypes: "",
};

export const typingSlice = createSlice({
  name: "typing",
  initialState,
  reducers: {
    changeSupertype: (state, action) => {
      state.superType = action.payload;
    },
    changeType: (state, action) => {
      state.type = action.payload;
    },
    changeSubtypes: (state, action) => {
      state.subtypes = action.payload;
    },
  },
});

export const { changeSubtypes, changeSupertype, changeType } =
  typingSlice.actions;

export default typingSlice.reducer;
