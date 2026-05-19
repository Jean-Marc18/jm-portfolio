import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes } from "react";

export type LabelProps = HTMLAttributes<HTMLSpanElement>;

export const Label = forwardRef<HTMLSpanElement, LabelProps>(function Label(
  { className, children, ...rest },
  ref
) {
  return (
    <span ref={ref} className={cn("pf-label", className)} {...rest}>
      {children}
    </span>
  );
});
