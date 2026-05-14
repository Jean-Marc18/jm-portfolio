import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export type StatusDotProps = HTMLAttributes<HTMLSpanElement>;

/**
 * Pulsing green dot used to signal availability.
 * Combine with <Pill> for "Disponible" badges.
 */
export const StatusDot = ({ className, ...rest }: StatusDotProps) => (
  <span className={cn("pf-dot", className)} aria-hidden="true" {...rest} />
);
