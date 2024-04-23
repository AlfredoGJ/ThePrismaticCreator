import { configureStore } from "@reduxjs/toolkit";
import namingReducer from "./naming/namingSlice";
import typingReducer from "./typing/typingSlice";
import expansionAndRarityReducer from "./expansionAndRarity/expancionAndRaritySlice";
import abilitiesAndFlavorReducer from "./AbilitiesAndFlavor/abilitiesAndFlavor";
import artistAndDisclaimerReducer from "./artistAndDisclaimer/artistAndDisclaimer";
import manaCostSlice from "./manaCost/manaCostSlice";
const store = configureStore({
  reducer: {
    naming: namingReducer,
    typing: typingReducer,
    expansionAndRarity: expansionAndRarityReducer,
    abilitiesAndFlavor: abilitiesAndFlavorReducer,
    artistAndDisclaimer: artistAndDisclaimerReducer,
    manaCost: manaCostSlice,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
