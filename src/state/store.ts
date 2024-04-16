import { configureStore } from "@reduxjs/toolkit";
import namingReducer from "./naming/namingSlice";
import typingReducer from "./typing/typingSlice";

const store = configureStore({
  reducer: {
    naming: namingReducer,
    typing: typingReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
