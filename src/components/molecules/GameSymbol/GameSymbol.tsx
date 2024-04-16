import { ReactComponent as RedMana } from "../../../assets/svg/red-mana-symbol.svg";
import { ReactComponent as BlueMana } from "../../../assets/svg/blue-mana-symbol.svg";
import { ReactComponent as WhiteMana } from "../../../assets/svg/white-mana-symbol.svg";
import { ReactComponent as BlackMana } from "../../../assets/svg/black-mana-symbol.svg";
import { ReactComponent as GreenMana } from "../../../assets/svg/green-mana-symbol.svg";
import { ReactComponent as SnowedMana } from "../../../assets/svg/snowed-mana-symbol.svg";
import { ReactComponent as TapSymbol } from "../../../assets/svg/tap-symbol.svg";
import { ReactComponent as PyrexianMana } from "../../../assets/svg/pyrexian-symbol.svg";
import React, { HtmlHTMLAttributes } from "react";
import { ManaCostSymbols } from "../../../ts/types";

const getGameSymbols = (short: string) => {
  switch (short) {
    case "R":
      return RedMana;
    case "U":
      return BlueMana;
    case "W":
      return WhiteMana;
    case "B":
      return BlackMana;
    case "G":
      return GreenMana;
    case "S":
      return SnowedMana;
    case "T":
      return TapSymbol;
    case "PyrexianMana":
      return PyrexianMana;

    default:
      return ({}) => <div>{short}</div>;
  }
};

const getGameSymbolBackground = (short: string) => {
  switch (short) {
    case "R":
      return "#E49977";
    case "U":
      return "#C1D7E9";
    case "W":
      return "#F8F6D8";
    case "B":
      return "#BAB1AB";
    case "G":
      return "#A3C095";
    case "S":
      return "#C9C4BE";
    case "T":
      return "#CAC5C0";
    case "PyrexianMana":
      return "#CAC5C0";
    case "C":
      return "#b1b1b1";

    default:
      return "#b1b1b1";
  }
};

interface GameSymbolProps extends HtmlHTMLAttributes<HTMLDivElement> {
  symbol: ManaCostSymbols;
  size: number;
}

export default function GameSymbol({
  symbol,
  size,
  children,
}: GameSymbolProps) {
  const SymbolComponent = getGameSymbols(symbol);
  const symbolBackground = getGameSymbolBackground(symbol);
  return (
    <div
      style={{
        borderRadius: "50%",
        background: symbolBackground,
        padding: size * 0.025,
        margin: size * 0.09,
        width: size,
        height: size,
        display: "flex",
        fontSize: size,
        justifyContent: "center",
        alignItems: "center",
        boxShadow: `${size * 0.02}px ${size * 0.2}px ${
          size * 0.04
        }px 0px rgba(0,0,0,1)`,
      }}
    >
      <SymbolComponent />
    </div>
  );
}
