import { configureStore } from "@reduxjs/toolkit";
import namingReducer from "./naming/namingSlice";
import typingReducer from "./typing/typingSlice";
import expansionAndRarityReducer from "./expansionAndRarity/expancionAndRaritySlice";
import abilitiesAndFlavorReducer from "./AbilitiesAndFlavor/abilitiesAndFlavor";
const store = configureStore({
  reducer: {
    naming: namingReducer,
    typing: typingReducer,
    expansionAndRarity: expansionAndRarityReducer,
    abilitiesAndFlavor: abilitiesAndFlavorReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
