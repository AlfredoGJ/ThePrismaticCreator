import { forwardRef } from "react";

interface textboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  Size?: "sm" | "md" | "lg";
  border?: "none" | string;
  textAlignment?: "left" | "center" | "right";
}

const Textbox = forwardRef(function Textbox(
  {
    autoComplete,
    id,
    name,
    onChange,
    type,
    placeholder,
    onClick,
    onBlur,
    value,
    readOnly,
    Size = "md",
    border,
    textAlignment = "left",
  }: textboxProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const sizeStyle =
    (Size === "md" && "py-2 px-4") || (Size === "sm" && "py-1 px-1");
  const borderStyle =
    border !== "none"
      ? `border ${border} focus:ring focus:ring-stone-300 focus:ring-1`
      : "border border-0";

  return (
    <div
      className={`text-${textAlignment} ${sizeStyle} ${borderStyle} bg-zinc-900 placeholder:italic rounded-full`}
    >
      <input
        autoComplete={autoComplete}
        id={id}
        name={name}
        className="bg-inherit focus:outline-none w-full"
        type={type}
        readOnly={readOnly}
        value={value}
        ref={ref}
        onClick={onClick}
        onBlur={onBlur}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </div>
  );
});

export default Textbox;
