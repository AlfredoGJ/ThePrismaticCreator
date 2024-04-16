import {
  ReactComponentElement,
  ReactElement,
  ReactNode,
  useContext,
} from "react";
import GameSymbol from "../../../components/molecules/GameSymbol/GameSymbol";
import { CardHeader } from "../../molecules/Header/CardHeader";
import { CardSizeContext } from "../../../utils/cardSizeContext";
import { constants } from "../../../constants/constants";
import { ManaCostSymbols } from "../../../ts/types";
import { CardText } from "../../atoms/CardText/CardText";

interface CardTitleProps extends React.HTMLProps<HTMLDivElement> {
  manaCost: ManaCostSymbols[];
}

export default function CardTitle({ manaCost, children }: CardTitleProps) {
  const { cardSize } = useContext(CardSizeContext);
  const { card } = constants;
  return (
    <CardHeader color="green" finish="emboss" hasColorBorder>
      <CardText variant="Title">{children}</CardText>
      <div style={{ display: "flex", alignItems: "center" }}>
        {manaCost.map((item) => (
          <GameSymbol
            symbol={item}
            size={cardSize.width * card.manaCostSymbolPercent}
          ></GameSymbol>
        ))}
      </div>
    </CardHeader>
  );
}
