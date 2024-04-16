import { createContext, useState } from "react";

interface CardSize {
    width: number; height: number
}
interface ICardSizeContext {
  cardSize: CardSize;
  setCardSize: React.Dispatch<React.SetStateAction<CardSize>>;
}

interface CardSizeContextProviderProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  value: CardSize;
}

export const initialCardSizeContext = {
  width: 0,
  height: 0,
};

export const CardSizeContext = createContext<ICardSizeContext>({
  cardSize: initialCardSizeContext,
  setCardSize: () => {},
});

export default function CardSizeContextProvider({
  children,
  value,
}: CardSizeContextProviderProps) {
  const [cardSizeContext, setCardSizeContext] = useState(value);

  return (
    <CardSizeContext.Provider
      value={{
        cardSize: cardSizeContext,
        setCardSize: setCardSizeContext,
      }}
    >
      {children}
    </CardSizeContext.Provider>
  );
}
