import { createSlice } from "@reduxjs/toolkit";
import { ImageData } from "../../ts/types";

export interface NamingState {
  name: string;
  image: ImageData;
}

const initialState: NamingState = {
  name: "",
  image: { data: "", name: "", type: "" },
};

export const namingSlice = createSlice({
  name: "naming",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { changeImage, changeName } = namingSlice.actions;

export default namingSlice.reducer;
