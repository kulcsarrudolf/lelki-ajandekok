interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  text: string;
  extraClasses?: string;
  order?: number;
  fullWidth?: boolean;
  variant?: "primary" | "outline" | "ghost" | "danger";
  noMargin?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  text,
  extraClasses,
  order,
  fullWidth = false,
  variant = "primary",
  noMargin,
}) => {
  const width = fullWidth ? "w-full" : "min-w-[10rem]";
  const o = order ? `order-${order} xs:order-none` : "";
  const margin = noMargin ? "" : "mx-5";

  const variantClasses = {
    primary: "bg-primary text-primary-foreground shadow-button hover:bg-primary/90 active:scale-[0.98]",
    outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary/5 active:scale-[0.98]",
    ghost:   "bg-accent text-accent-foreground shadow-sm hover:opacity-90 active:scale-[0.98]",
    danger:  "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:scale-[0.98]",
  };

  const disabledClasses = "bg-muted text-muted-foreground cursor-not-allowed opacity-60";

  const baseClasses = `${width} h-12 px-5 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring ${margin} ${o}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${disabled ? disabledClasses : variantClasses[variant]} ${extraClasses ?? ""}`}
    >
      {text}
    </button>
  );
};

export const TextButton: React.FC<Omit<ButtonProps, "variant">> = ({
  onClick,
  text,
  order,
  fullWidth = false,
  noMargin,
}) => {
  const width = fullWidth ? "w-full" : "min-w-[10rem]";
  const o = order ? `order-${order} xs:order-none` : "";
  const margin = noMargin ? "" : "mx-5";

  return (
    <a
      onClick={onClick}
      className={`${width} h-12 px-5 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-ring ${margin} ${o} cursor-pointer text-primary hover:underline flex items-center justify-center`}
    >
      {text}
    </a>
  );
};

export default Button;
