import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "lg" | "md";
  shape?: "leftHalf" | "rightHalf" | "round" | "square";
  variant?: "contained" | "outlined";
  color?: "primary" | "secondary" | "tertiary" | "info" | "success" | "error";
  contentCenter?: boolean;
}

export default function Button({
  children,
  onClick,
  size = "md",
  shape = "round",
  variant = "contained",
  color = "primary",
  className,
  contentCenter,
}: ButtonProps) {
  const colorBackgrounds = {
    primary: "bg-orange-600",
    secondary: "bg-blue-600",
    tertiary: "",
    info: "",
    success: "",
    error: "",
  };

  const colorBorders = {
    primary: "border-orange-500",
    secondary: "border-blue-500",
    tertiary: "",
    info: "",
    success: "",
    error: "",
  };

  const textColors = {
    primary: "text-orange-500",
    secondary: "text-blue-500",
    tertiary: "",
    info: "",
    success: "",
    error: "",
  };

  const shapeStyles = {
    leftHalf: `rounded-l-full ${size === "sm" ? "px-0 py-0" : "px-4 py-4"}`,
    rightHalf: `rounded-r-full ${size === "sm" ? "px-0 py-0" : "px-4 py-4"}`,
    round: `rounded-full ${
      size === "sm" ? "px-2 py-0" : size === "md" ? "px-4 py-2" : "px-4 px-4"
    }`,
    square: `rounded-sm ${
      size === "sm"
        ? "px-1 py-0 h-8 text-sm"
        : size === "md"
        ? "px-2 py-2"
        : "px-4 py-4"
    }`,
  };

  const variantStyles = {
    contained: `${colorBackgrounds[color]} text-white border ${colorBorders[color]}`,
    outlined: `bg-transparent ${textColors[color]} border ${colorBorders[color]}`,
  };

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    onClick!(e);
  }

  return (
    <button
      onClick={handleClick}
      className={`${className} ${shapeStyles[shape]} ${
        variantStyles[variant]
      } ${contentCenter && "flex justify-center items-center"}`}
    >
      {children}
    </button>
  );
}
