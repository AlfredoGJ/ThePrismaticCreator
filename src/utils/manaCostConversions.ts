import { ManaCostSymbols } from "../ts/types";
import { ICostQuantity } from "../ts/types";

function costSymbolsFromNumber(costQuantity: ICostQuantity) {
  const { white, blue, black, red, green, colorless } = costQuantity;

  const costSymbols:ManaCostSymbols[] = [];

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

  for (let i = 0; i < colorless; i++) {
    costSymbols.push("C");
  }

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

export { costSymbolsFromNumber, numberFromCostSymbols };
