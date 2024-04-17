import { configureStore } from "@reduxjs/toolkit";
import namingReducer from "./naming/namingSlice";
import typingReducer from "./typing/typingSlice";
import expansionAndRarityReducer from "./expansionAndRarity/expancionAndRaritySlice";
const store = configureStore({
  reducer: {
    naming: namingReducer,
    typing: typingReducer,
    expansionAndRarity: expansionAndRarityReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
