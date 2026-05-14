import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export type LogoSize = "sm" | "md";

const SIZE_STYLE: Record<LogoSize, React.CSSProperties> = {
  sm: { width: 32, height: 32, fontSize: 11 },
  md: { width: 40, height: 40, fontSize: 13 },
};

export type LogoProps = HTMLAttributes<HTMLSpanElement> & {
  size?: LogoSize;
  label?: string;
};

export const Logo = ({
  size = "md",
  label = "JMK",
  className,
  style,
  ...rest
}: LogoProps) => (
  <span
    className={cn("pf-logo", className)}
    style={{ ...SIZE_STYLE[size], ...style }}
    {...rest}
  >
    {label}
  </span>
);
