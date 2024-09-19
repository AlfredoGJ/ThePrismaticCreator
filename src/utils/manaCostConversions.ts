import {
  ColorIdentityEnum,
  ManaCostSymbols,
  MonoColorIdentityEnum,
  NoColorIdentityEnum,
  TwoColorIdentityEnum,
} from "../ts/types";
import { ICostQuantity } from "../ts/types";
import Set from "core-js/stable/set";

function costSymbolsFromNumber(costQuantity: ICostQuantity) {
  const { white, blue, black, red, green, colorless } = costQuantity;

  const costSymbols: ManaCostSymbols[] = [];

  for (let i = 0; i < white; i++) {
    costSymbols.push("W");
  }

  for (let i = 0; i < blue; i++) {
    costSymbols.push("U");
  }

  for (let i = 0; i < black; i++) {
    costSymbols.push("B");
  }

  for (let i = 0; i < red; i++) {
    costSymbols.push("R");
  }

  for (let i = 0; i < green; i++) {
    costSymbols.push("G");
  }

  let colorlesCount = 0;
  for (let i = 0; i < colorless; i++) {
    colorlesCount++;
  }
  if (colorlesCount > 0)
    costSymbols.push(colorlesCount.toString() as ManaCostSymbols);

  return costSymbols;
}

function numberFromCostSymbols(costSymbols: ManaCostSymbols[]) {
  const costQuantity: ICostQuantity = {
    white: 0,
    blue: 0,
    black: 0,
    red: 0,
    green: 0,
    colorless: 0,
  };

  for (const symbol of costSymbols) {
    switch (symbol) {
      case "W":
        costQuantity.white++;
        break;
      case "U":
        costQuantity.blue++;
        break;
      case "B":
        costQuantity.black++;
        break;
      case "R":
        costQuantity.red++;
        break;
      case "G":
        costQuantity.green++;
        break;
      case "C":
        costQuantity.colorless++;
        break;
    }
  }

  return costQuantity;
}

function getColorIdentityFromLandSubtype(
  landType: string[]
): ColorIdentityEnum {
  const landTypeToManaSymbol = landType
    .map((land) => {
      if (land === "Forest") return "G";
      if (land === "Swamp") return "B";
      if (land === "Island") return "U";
      if (land === "Plains") return "W";
      if (land === "Mountain") return "R";
      return undefined
    })
    .filter((s) => s !== undefined);

  return getColorIdentityFromManaCost(landTypeToManaSymbol);
}

function getColorIdentityFromManaCost(
  manaCost: ManaCostSymbols[]
): ColorIdentityEnum {
  const costSet = new Set(manaCost);
  const colorSet = new Set(["W", "U", "B", "R", "G"]);

  // console.log("CostSet:", costSet);
  if (costSet.isDisjointFrom(colorSet)) return NoColorIdentityEnum.Colorless;

  if (
    costSet.intersection(new Set(["W", "U"])).size === 2 &&
    costSet.intersection(new Set(["B", "G", "R"])).size === 0
  )
    return TwoColorIdentityEnum.Azorius;
  if (
    costSet.intersection(new Set(["B", "U"])).size === 2 &&
    costSet.intersection(new Set(["W", "G", "R"])).size === 0
  )
    return TwoColorIdentityEnum.Dimir;
  if (
    costSet.intersection(new Set(["R", "B"])).size === 2 &&
    costSet.intersection(new Set(["W", "G", "U"])).size === 0
  )
    return TwoColorIdentityEnum.Rakdos;
  if (
    costSet.intersection(new Set(["G", "R"])).size === 2 &&
    costSet.intersection(new Set(["B", "W", "U"])).size === 0
  )
    return TwoColorIdentityEnum.Gruul;
  if (
    costSet.intersection(new Set(["G", "W"])).size === 2 &&
    costSet.intersection(new Set(["B", "U", "R"])).size === 0
  )
    return TwoColorIdentityEnum.Selesnya;
  if (
    costSet.intersection(new Set(["W", "B"])).size === 2 &&
    costSet.intersection(new Set(["U", "G", "R"])).size === 0
  )
    return TwoColorIdentityEnum.Orzhov;
  if (
    costSet.intersection(new Set(["U", "G"])).size === 2 &&
    costSet.intersection(new Set(["B", "W", "R"])).size === 0
  )
    return TwoColorIdentityEnum.Simic;
  if (
    costSet.intersection(new Set(["W", "R"])).size === 2 &&
    costSet.intersection(new Set(["U", "G", "B"])).size === 0
  )
    return TwoColorIdentityEnum.Boros;
  if (
    costSet.intersection(new Set(["G", "B"])).size === 2 &&
    costSet.intersection(new Set(["U", "W", "R"])).size === 0
  )
    return TwoColorIdentityEnum.Golgari;
  if (
    costSet.intersection(new Set(["U", "R"])).size === 2 &&
    costSet.intersection(new Set(["W", "G", "B"])).size === 0
  )
    return TwoColorIdentityEnum.Izzet;

  if (
    costSet.has("R") &&
    costSet.intersection(new Set(["W", "U", "B", "G"])).size === 0
  )
    return MonoColorIdentityEnum.Red;
  if (
    costSet.has("G") &&
    costSet.intersection(new Set(["W", "U", "B", "R"])).size === 0
  )
    return MonoColorIdentityEnum.Green;
  if (
    costSet.has("B") &&
    costSet.intersection(new Set(["W", "U", "G", "R"])).size === 0
  )
    return MonoColorIdentityEnum.Black;
  if (
    costSet.has("U") &&
    costSet.intersection(new Set(["W", "B", "G", "R"])).size === 0
  )
    return MonoColorIdentityEnum.Blue;
  if (
    costSet.has("W") &&
    costSet.intersection(new Set(["U", "B", "G", "R"])).size === 0
  )
    return MonoColorIdentityEnum.White;

  return TwoColorIdentityEnum.Multicolor;
}

export {
  costSymbolsFromNumber,
  numberFromCostSymbols,
  getColorIdentityFromManaCost,
  getColorIdentityFromLandSubtype,
};
