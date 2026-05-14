import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes, type ReactNode } from "react";

export type PillVariant = "default" | "dark" | "on-pastel";

const VARIANT_CLASS: Record<PillVariant, string> = {
  default: "pf-pill",
  dark: "pf-pill pf-pill-dark",
  "on-pastel": "pf-pill",
};

const VARIANT_STYLE: Partial<Record<PillVariant, React.CSSProperties>> = {
  "on-pastel": {
    background: "rgba(255,255,255,0.6)",
    color: "#1A1A18",
    borderColor: "rgba(0,0,0,0.08)",
  },
};

export type PillProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: PillVariant;
  leading?: ReactNode;
};

export const Pill = forwardRef<HTMLSpanElement, PillProps>(function Pill(
  { variant = "default", className, children, leading, style, ...rest },
  ref
) {
  return (
    <span
      ref={ref}
      className={cn(VARIANT_CLASS[variant], className)}
      style={{ ...VARIANT_STYLE[variant], ...style }}
      {...rest}
    >
      {leading}
      {children}
    </span>
  );
});
