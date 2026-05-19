import { cn } from "@/lib/utils";
import Link from "next/link";
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
  trailing?: ReactNode;
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

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  CommonProps;

// Mailto, tel, http(s), and protocol-relative URLs are external.
const isInternal = (href: string | undefined): href is string =>
  typeof href === "string" && href.startsWith("/") && !href.startsWith("//");

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  function ButtonLink(
    { variant = "primary", className, children, leading, trailing, href, ...rest },
    ref
  ) {
    const classes = cn("pf-btn", VARIANT_CLASS[variant], className);

    if (isInternal(href)) {
      return (
        <Link ref={ref} href={href} className={classes} {...rest}>
          {leading}
          {children}
          {trailing}
        </Link>
      );
    }

    return (
      <a ref={ref} href={href} className={classes} {...rest}>
        {leading}
        {children}
        {trailing}
      </a>
    );
  }
);
