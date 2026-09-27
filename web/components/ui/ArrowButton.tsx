import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { ArrowUpRight, ArrowUpRightLg, ArrowUpRightSm } from "./icons";

export type ArrowButtonVariant = "default" | "accent" | "dark" | "inverted";
export type ArrowButtonSize = "sm" | "md" | "lg";

const SIZE_STYLE: Record<ArrowButtonSize, React.CSSProperties> = {
  sm: { width: 28, height: 28 },
  md: { width: 32, height: 32 },
  lg: { width: 56, height: 56 },
};

const VARIANT_STYLE: Record<ArrowButtonVariant, React.CSSProperties> = {
  default: {},
  accent: {
    background: "var(--accent)",
    color: "#1A1A18",
    borderColor: "var(--accent)",
  },
  dark: {
    background: "#1A1A18",
    color: "#F7F5F0",
    borderColor: "#1A1A18",
  },
  inverted: {
    background: "var(--ink)",
    color: "var(--bg)",
    borderColor: "var(--ink)",
  },
};

const renderIcon = (size: ArrowButtonSize): ReactNode => {
  if (size === "lg") return <ArrowUpRightLg />;
  if (size === "sm") return <ArrowUpRightSm />;
  return <ArrowUpRight />;
};

type CommonProps = {
  variant?: ArrowButtonVariant;
  size?: ArrowButtonSize;
  /** Override the default arrow icon. */
  icon?: ReactNode;
};

export type ArrowButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & CommonProps;

export const ArrowButton = forwardRef<HTMLButtonElement, ArrowButtonProps>(
  function ArrowButton(
    { variant = "default", size = "md", icon, className, style, children, ...rest },
    ref
  ) {
    return (
      <button
        ref={ref}
        type="button"
        className={cn("pf-arrow", className)}
        style={{ ...SIZE_STYLE[size], ...VARIANT_STYLE[variant], ...style }}
        {...rest}
      >
        {icon ?? renderIcon(size)}
        {children}
      </button>
    );
  }
);

export type ArrowLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & CommonProps;

const isInternal = (href: string | undefined): href is string =>
  typeof href === "string" && href.startsWith("/") && !href.startsWith("//");

export const ArrowLink = forwardRef<HTMLAnchorElement, ArrowLinkProps>(
  function ArrowLink(
    {
      variant = "default",
      size = "md",
      icon,
      className,
      style,
      children,
      href,
      ...rest
    },
    ref
  ) {
    const classes = cn("pf-arrow", className);
    const composedStyle = {
      ...SIZE_STYLE[size],
      ...VARIANT_STYLE[variant],
      ...style,
    };

    if (isInternal(href)) {
      return (
        <Link
          ref={ref}
          href={href}
          className={classes}
          style={composedStyle}
          {...rest}
        >
          {icon ?? renderIcon(size)}
          {children}
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        style={composedStyle}
        {...rest}
      >
        {icon ?? renderIcon(size)}
        {children}
      </a>
    );
  }
);
