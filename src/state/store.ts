import { configureStore } from "@reduxjs/toolkit";
import namingReducer from "./naming/namingSlice";

const store = configureStore({
  reducer: {
    naming: namingReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
