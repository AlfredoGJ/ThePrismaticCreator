import { PhotoIcon } from "@heroicons/react/20/solid";
import React, {
  ChangeEvent,
  MutableRefObject,
  forwardRef,
  useEffect,
} from "react";

interface textboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  Size?: "sm" | "md" | "lg";
  border?: "none" | string;
  textAlignment?: "left" | "center" | "right";
}

const FileUpload = forwardRef(function Textbox(
  {
    placeholder,
    onChange,
    onClick,
    onBlur,
    value,
    readOnly,
    Size = "md",
    border,
    textAlignment = "left",
  }: textboxProps,
  forwardedRef: React.ForwardedRef<HTMLInputElement>
) {
  const sizeStyle =
    (Size === "md" && "py-2 px-4") || (Size === "sm" && "py-1 px-1");
  const borderStyle =
    border !== "none"
      ? ` border border-dashed focus:ring focus:ring-stone-300 focus:ring-1`
      : "border border-0";

  const innerRef = React.useRef<HTMLInputElement>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(event);
    console.log(event.target.files);
    // let files = event.target.files;
    onChange && onChange(event);
  }

  function handleClick() {
    console.log("I was clicked");
    if (innerRef.current) {
      innerRef.current.click();
    }
  }

  useEffect(() => {
    // The inner ref has been attached to the element and has been rendered
    if (innerRef.current) {
      if (typeof forwardedRef === "function") forwardedRef(innerRef.current);
      else {
        if (forwardedRef?.current) {
          forwardedRef.current = innerRef.current;
        }
      }
    }
  }, []);

  return (
    <div
      onClick={handleClick}
      className={`flex space-x-2  align-middle text-${textAlignment} ${sizeStyle} ${borderStyle} bg-zinc-900 placeholder:italic rounded-full cursor-pointer`}
    >
      <div>
        <PhotoIcon width={22}></PhotoIcon>
      </div>
      <div className=" text-gray-400 italic">
        {value ? value : "Click to upload an image"}
      </div>
      <input
        accept=".jpg,.png "
        id="fileInput"
        className="bg-inherit focus:outline-none w-full hidden"
        autoComplete="off"
        type="file"
        readOnly={readOnly}
        ref={innerRef}
        onBlur={onBlur}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
});

export default FileUpload;
