import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export type StatusDotProps = HTMLAttributes<HTMLSpanElement>;

export const StatusDot = ({ className, ...rest }: StatusDotProps) => (
  <span className={cn("pf-dot", className)} aria-hidden="true" {...rest} />
);
