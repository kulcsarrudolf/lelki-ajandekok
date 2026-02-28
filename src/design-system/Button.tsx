interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  text: string;
  extraClasses?: string;
  order?: number;
  fullWidth?: boolean;
  colorClass?: string; // New prop to handle color classes
  noMargin?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  text,
  extraClasses,
  order,
  fullWidth = false,
  colorClass,
  noMargin,
}) => {
  const width = fullWidth ? "w-full" : "min-w-[10rem]";

  const color = order === 1 ? "bg-rose-200" : "bg-blue-200";

  // Use the provided colorClass or default to blue
  const colorClasses = colorClass || "bg-blue-500 hover:bg-blue-600";
  const o = order ? `order-${order} xs:order-none` : "";
  const disabledClasses = `${color} cursor-not-allowed`;
  const margin = noMargin ? "" : "mx-5";

  const defaultClasses = `${width} h-12 px-5 text-white font-semibold rounded focus:outline-none focus:ring-2 focus:ring-blue-300 ${margin} ${o}`;

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

export const TextButton: React.FC<ButtonProps & { linkStyle?: boolean }> = ({
  onClick,
  text,
  order,
  fullWidth = false,
  noMargin,
}) => {
  const width = fullWidth ? "w-full" : "min-w-[10rem]";

  const o = order ? `order-${order} xs:order-none` : "";
  const margin = noMargin ? "" : "mx-5";

  const defaultClasses = `${width} h-12 px-5 text-white font-semibold rounded focus:outline-none focus:ring-2 focus:ring-blue-300 ${margin} ${o} cursor-pointer`;

  const linkClasses = "text-blue-500 hover:underline";

  return (
    <a onClick={onClick} className={`${defaultClasses} ${linkClasses}`}>
      {text}
    </a>
  );
};

export default Button;
