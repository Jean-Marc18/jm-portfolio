"use client";

import { Route } from "@/constants";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import ThemeSwitch from "./ThemeSwitch";
import { Separator } from "../ui/separator";

export const NavBar: React.FC<{ tabs: Route[] }> = ({ tabs }) => {
  const fired = useRef(false);
  const defaultSelectedTabIndex = 0;
  const [currentLink, setCurrentLink] = useState<{
    index: number;
    left: undefined | number;
    width: undefined | number;
  }>({
    index: defaultSelectedTabIndex,
    left: undefined,
    width: undefined,
  });
  const defaultSelectedTabStyles = [
    "[&:nth-child(1)]:dark:bg-white [&:nth-child(1)]:bg-white",
    "[&:nth-child(2)]:dark:bg-white [&:nth-child(2)]:bg-neutral-950",
    "[&:nth-child(3)]:dark:bg-white [&:nth-child(3)]:bg-neutral-950",
    "[&:nth-child(4)]:dark:bg-white [&:nth-child(4)]:bg-neutral-950",
  ];

  useEffect(() => {
    setCurrentLink(() => ({
      left: document.getElementById("uuu-btn-" + defaultSelectedTabIndex)
        ?.offsetLeft,
      width: document
        .getElementById("uuu-btn-" + defaultSelectedTabIndex)
        ?.getBoundingClientRect().width,
      index: defaultSelectedTabIndex,
    }));
  }, []);

  return (
    <div
      className={
        "w-fit hidden sm:flex relative border dark:border-neutral-800 border-neutral-300 rounded-full gap-5 items-center justify-center p-2 backdrop-blur-2xl bg-black text-white"
      }
    >
      {tabs.map((link, i) => (
        <Link
          href={link.path}
          key={i}
          id={"uuu-btn-" + i}
          onClick={() => {
            fired.current = true;
            setCurrentLink(() => ({
              left: document.getElementById("uuu-btn-" + i)?.offsetLeft,
              width: document
                .getElementById("uuu-btn-" + i)
                ?.getBoundingClientRect().width,
              index: i,
            }));
          }}
          onMouseEnter={() => {
            fired.current = true;
            setCurrentLink(() => ({
              left: document.getElementById("uuu-btn-" + i)?.offsetLeft,
              width: document
                .getElementById("uuu-btn-" + i)
                ?.getBoundingClientRect().width,
              index: i,
            }));
          }}
          className={twMerge(
            "transition-colors duration-200 group flex items-center justify-center rounded-full h-fit px-4 py-2 text-nowrap",
            currentLink.index === i && "dark:text-neutral-900 text-black",
            fired.current
              ? ""
              : `${defaultSelectedTabStyles[defaultSelectedTabIndex]} px-4 py-3`
          )}
        >
          {link.name === "Projets" && (
            <span
              className={twMerge(
                "font-labil duration-200 rounded-full px-1.5 py-1 text-xs mr-1",
                currentLink.index === i
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-800"
              )}
            >
              10
            </span>
          )}
          {link.name}
        </Link>
      ))}

      <Separator orientation="vertical" className="h-6" />
      <ThemeSwitch />

      <div className={"absolute inset-0 h-full p-2 -z-[1] overflow-hidden"}>
        <div className={"relative h-full w-full overflow-hidden"}>
          <div
            style={{
              left: `calc(${currentLink.left || 0}px - 0.75rem + 0.25rem)`,
              width: `${currentLink.width || 0}px`,
            }}
            className={twMerge(
              `transition-[color,left,width] duration-300 absolute top-1/2 -translate-y-1/2 h-full rounded-full -z-[1]`,
              //just skips animation on page load
              fired.current ? "dark:bg-white bg-white" : "bg-transparent"
            )}
          />
        </div>
      </div>
    </div>
  );
};
