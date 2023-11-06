import React from "react";

interface ButtonProps {
  onClick: () => void;
  disabled: boolean;
  text: string;
  extraClasses?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  text,
  extraClasses,
  fullWidth = false,
}) => {
  const width = fullWidth ? "min-w-full" : "min-w-[10rem]";

  const defaultClasses = `${width} h-12 text-white font-semibold rounded focus:outline-none focus:ring-2 focus:ring-blue-300 mx-5`;
  const enabledClasses = "bg-blue-500 hover:bg-blue-600";
  const disabledClasses = "bg-blue-200 cursor-not-allowed";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${defaultClasses} ${
        disabled ? disabledClasses : enabledClasses
      } ${extraClasses}`}
    >
      {text}
    </button>
  );
};

export default Button;
