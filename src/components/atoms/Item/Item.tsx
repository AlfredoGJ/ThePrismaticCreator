import React from "react";

interface optionProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  icon: React.ReactNode;
  Component: keyof JSX.IntrinsicElements;
  selected? : boolean;
}

export default function Item({
  icon,
  label,
  id,
  onClick,
  selected,
}: optionProps) {
  return (
    <div
      className={`flex flex-row p-2 ${selected ? "bg-purple-500" : ""}`}
      tabIndex={1}
      id={id}
      onClick={onClick}
    >
      <div className="basis-1/2">{label}</div>
      <div className="basis-1/2">{icon}</div>
    </div>
  );
}
