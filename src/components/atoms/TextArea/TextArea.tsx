import React from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  onChangeText: (value: string) => void;
  rows?: number;
  cols?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChangeText,
  rows,
  cols,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChangeText(event.target.value);
  };

  return (
    <textarea
      rows={rows}
      cols={cols}
      className={`p-2 bg-zinc-900 placeholder:italic rounded-lg resize-none`}
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default TextArea;
