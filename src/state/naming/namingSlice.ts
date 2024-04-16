import { createSlice } from "@reduxjs/toolkit";

export const namingSlice = createSlice({
  name: "naming",
  initialState: { name: "", image: { data: "", name: "", type: "" } },
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
