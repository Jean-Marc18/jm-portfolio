import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  fill: "none",
  "aria-hidden": true as const,
};

export const ArrowUpRight = ({ size = 14, ...props }: IconProps & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" {...baseProps} {...props}>
    <path
      d="M4 10 L10 4 M5 4 H10 V9"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const ArrowUpRightLg = ({ size = 18, ...props }: IconProps & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" {...baseProps} {...props}>
    <path
      d="M5 13 L13 5 M6 5 H13 V12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const ArrowUpRightSm = ({ size = 12, ...props }: IconProps & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" {...baseProps} {...props}>
    <path
      d="M3.5 8.5 L8.5 3.5 M4.5 3.5 H8.5 V7.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const ArrowDiagonal = ({ size = 13, ...props }: IconProps & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 13 13" {...baseProps} {...props}>
    <path
      d="M4 9 L9 4 M5 4 H9 V8"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const Download = ({ size = 13, ...props }: IconProps & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 13 13" {...baseProps} {...props}>
    <path
      d="M6.5 2v7M3 6l3.5 3.5L10 6M2 11h9"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const Menu = ({ size = 14, ...props }: IconProps & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" {...baseProps} {...props}>
    <path
      d="M2 4h10M2 7h10M2 10h10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const Sun = ({ size = 16, ...props }: IconProps & { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    {...baseProps}
    {...props}
  >
    <circle cx="8" cy="8" r="3" />
    <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.4 1.4M11.6 11.6L13 13M3 13l1.4-1.4M11.6 4.4L13 3" />
  </svg>
);

export const Moon = ({ size = 16, ...props }: IconProps & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" {...props}>
    <path
      d="M9 1.5c-.7.6-1 1.5-1 2.5 0 2.5 2 4.5 4.5 4.5.7 0 1.4-.2 2-.5C13.6 11.4 10.5 14 7 14c-3.9 0-7-3.1-7-7s3.1-7 7-7c.7 0 1.4.1 2 .3v.2z"
      transform="translate(1 1)"
    />
  </svg>
);
