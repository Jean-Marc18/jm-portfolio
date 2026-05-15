import { cn } from "@/lib/utils";
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

export type ButtonVariant = "primary" | "ghost" | "light" | "darkghost";

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: "pf-btn-primary",
  ghost: "pf-btn-ghost",
  light: "pf-btn-light",
  darkghost: "pf-btn-darkghost",
};

type CommonProps = {
  variant?: ButtonVariant;
  /** Content rendered after the children (typically an icon). */
  trailing?: ReactNode;
  /** Content rendered before the children. */
  leading?: ReactNode;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & CommonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", className, children, leading, trailing, ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn("pf-btn", VARIANT_CLASS[variant], className)}
      {...rest}
    >
      {leading}
      {children}
      {trailing}
    </button>
  );
});

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & CommonProps;

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  function ButtonLink(
    { variant = "primary", className, children, leading, trailing, ...rest },
    ref
  ) {
    return (
      <a
        ref={ref}
        className={cn("pf-btn", VARIANT_CLASS[variant], className)}
        {...rest}
      >
        {leading}
        {children}
        {trailing}
      </a>
    );
  }
);
