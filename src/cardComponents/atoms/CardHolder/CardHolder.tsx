import { constants } from "../../../constants/constants";
import { CardSizeContext } from "../../../utils/cardSizeContext";
import "./CardHolder.css";
import { useContext, useEffect, useRef } from "react";

interface CardHolderPorps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "old" | "modern";
}

export const CardHolder = ({ children, type = "old" }: CardHolderPorps) => {
  const cardFrameRef = useRef(null);

  const { setCardSize, cardSize } = useContext(CardSizeContext);
  const { outerBorderPercent, borderRadiusPercent: borderRadiusPcnt } =
    constants.card;

  function handleCardResize(entries: Array<ResizeObserverEntry>) {
    console.log("Card Resize", entries[0].borderBoxSize);
    const height = entries[0].borderBoxSize[0].blockSize;
    const width = entries[0].borderBoxSize[0].inlineSize;
    setCardSize({ width, height });
  }

  useEffect(() => {
    if (cardFrameRef.current) {
      const observer = new ResizeObserver(handleCardResize);
      observer.observe(cardFrameRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div
      ref={cardFrameRef}
      className="card-holder card-holder-black"
      style={{
        padding: `${cardSize.width * outerBorderPercent}px`,
        borderRadius: `${cardSize.width * borderRadiusPcnt}px`,
        // width: `${cardSize.width}px`,
        // height:`${cardSize.height}px`,
        display:'flex'
      }}
    >
      {children}
    </div>
  );
};
