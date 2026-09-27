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

export const Logo = ({ size = "md", className, style }: LogoProps) => {
  const { width, height } = SIZE_STYLE[size];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width={width}
      height={height}
      viewBox="200 235 365 265"
      preserveAspectRatio="xMidYMid meet"
      style={style}
      className={className}
    >
      <g
        transform="translate(0,768) scale(0.1,-0.1)"
        fill="currentColor"
        stroke="none"
      >
        <path d="M2627 3831 c-279 -554 -507 -1011 -507 -1015 0 -3 64 -6 143 -6 l143 0 502 1010 c276 555 502 1012 502 1015 0 3 -62 5 -138 5 l-138 0 -507 -1009z" />
        <path d="M3940 4378 l0 -463 200 200 200 200 0 262 0 263 -200 0 -200 0 0 -462z" />
        <path d="M4923 4638 c-110 -112 -377 -383 -592 -603 l-390 -400 -1 -412 0 -413 200 0 200 0 0 397 0 397 71 -69 c39 -39 213 -217 386 -397 l316 -328 275 0 275 0 -74 78 c-41 42 -262 272 -493 510 l-418 433 158 162 c400 407 809 829 812 838 2 5 -104 9 -260 9 l-264 0 -201 -202z" />
        <path d="M3362 4035 c-145 -74 -182 -259 -77 -382 54 -63 110 -86 200 -81 62 3 80 8 117 33 23 17 56 50 72 73 25 35 31 55 34 113 5 85 -13 141 -64 193 -49 51 -89 68 -164 73 -56 4 -73 1 -118 -22z" />
      </g>
    </svg>
  );
};
