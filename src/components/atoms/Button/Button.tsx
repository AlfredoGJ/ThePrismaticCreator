import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "lg" | "md";
  shape?: "leftHalf" | "rightHalf" | "round" ;
}

export default function Button({
  children,
  onClick,
  size = "md",
  shape = "round",
}: ButtonProps) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    onClick!(e);
  }

  const styles = (shape: string, size: string) => {
    let style = "";
    if (shape === "leftHalf" || shape === 'rightHalf') {

      style = shape === "leftHalf"? `${style} rounded-l-full`: `${style} rounded-r-full`;
      switch (size) {
        case "sm":
          return `${style} px-0 py-0`;
        case "md":
          return `${style} px-4 py-2`;
        case "lg":
          return `${style} px-4 py-4`;
        default:
          return style
      }
    }
    if(shape === 'round'){
      style = "rounded-full bg-blue"
      switch (size) {
        case "sm":
          return `${style} px-2 py-0`;
        case "md":
          return `${style} px-4 py-2`;
        case "lg":
          return `${style} px-4 py-4`;
        default:
        return style;
      }
    }
  };



  return (
    <button
      onClick={handleClick}
      className={`${styles(shape, size)} bg-orange-600  text-white border border-orange-500`}
    >
      {children}
    </button>
  );
}
