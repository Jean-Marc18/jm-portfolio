import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes } from "react";

export type CardProps = HTMLAttributes<HTMLElement> & {
  /** Render as `<article>` (default) or `<div>`. */
  as?: "article" | "div";
};

export const Card = forwardRef<HTMLElement, CardProps>(function Card(
  { as: Component = "article", className, children, ...rest },
  ref
) {
  // forwardRef typing collapses; pass-through is intentional.
  return (
    <Component
      ref={ref as React.Ref<HTMLDivElement & HTMLElement>}
      className={cn("pf-card", className)}
      {...rest}
    >
      {children}
    </Component>
  );
});
