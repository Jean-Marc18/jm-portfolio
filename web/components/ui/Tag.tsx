import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes } from "react";

export type TagVariant = "default" | "dark";

const VARIANT_CLASS: Record<TagVariant, string> = {
  default: "pf-tag",
  dark: "pf-tag pf-tag-dark",
};

export type TagProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: TagVariant;
};

export const Tag = forwardRef<HTMLSpanElement, TagProps>(function Tag(
  { variant = "default", className, children, ...rest },
  ref
) {
  return (
    <span
      ref={ref}
      className={cn(VARIANT_CLASS[variant], className)}
      {...rest}
    >
      {children}
    </span>
  );
});

export type TagListProps = HTMLAttributes<HTMLUListElement> & {
  items: string[];
  variant?: TagVariant;
  max?: number;
};

export const TagList = ({
  items,
  variant = "default",
  max,
  className,
  ...rest
}: TagListProps) => {
  const visible = typeof max === "number" ? items.slice(0, max) : items;
  return (
    <ul
      className={cn(
        "flex flex-wrap gap-1.5 list-none p-0 m-0",
        className
      )}
      {...rest}
    >
      {visible.map((item) => (
        <li key={item}>
          <Tag variant={variant}>{item}</Tag>
        </li>
      ))}
    </ul>
  );
};
