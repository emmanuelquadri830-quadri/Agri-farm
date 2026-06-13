import * as React from "react";

type Variant = "default" | "ghost" | "outline" | "secondary";
type Size = "default" | "sm" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  default:
    "bg-primary text-primary-foreground hover:bg-primary/90",
  ghost:
    "bg-transparent hover:bg-secondary text-foreground",
  outline:
    "border border-border bg-background hover:bg-secondary text-foreground",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
};

const sizeClasses: Record<Size, string> = {
  default: "h-9 px-4 py-2 text-sm",
  sm: "h-8 px-3 text-xs",
  lg: "h-11 px-8 text-base",
  icon: "h-9 w-9",
};

export function Button({
  className = "",
  variant = "default",
  size = "default",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer";
  const classes = [base, variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
