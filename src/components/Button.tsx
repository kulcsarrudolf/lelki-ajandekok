interface ButtonProps {
  onClick: () => void;
  disabled: boolean;
  text: string;
  extraClasses?: string;
  order?: number;
  fullWidth?: boolean;
  colorClass?: string; // New prop to handle color classes
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  text,
  extraClasses,
  order,
  fullWidth = false,
  colorClass,
}) => {
  const width = fullWidth ? "w-full" : "min-w-[10rem]";

  const color = order === 1 ? "bg-rose-200" : "bg-blue-200";

  // Use the provided colorClass or default to blue
  const colorClasses = colorClass || "bg-blue-500 hover:bg-blue-600";
  const o = order ? `order-${order} xs:order-none` : "";
  const disabledClasses = `${color} cursor-not-allowed`;

  const defaultClasses = `${width} h-12 px-5 text-white font-semibold rounded focus:outline-none focus:ring-2 focus:ring-blue-300 mx-5 ${o}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${defaultClasses} ${
        disabled ? disabledClasses : colorClasses
      } ${extraClasses}`}
    >
      {text}
    </button>
  );
};

export default Button;
