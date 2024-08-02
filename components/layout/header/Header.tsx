"use client";

import { NavBar } from "@/components/common/Navbar";
import ThemeSwitch from "@/components/common/ThemeSwitch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { routes } from "@/constants";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const onShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className="flex sm:flex-col items-center justify-between py-4 fixed w-full px-4 sm:justify-center sm:gap-3 backdrop-blur-sm z-10 bg-white/15 dark:bg-black/15">
      <div className="z-20 font-labil text-gray-800 dark:text-white text-3xl">
        <Link href="/" className="relative">
          Jmk<span className="text-sm absolute top-0">®</span>
        </Link>
      </div>

      {/* Desktop menu */}
      <NavBar tabs={routes} />

      {/* Mobile menu */}
      <nav
        className={`fixed flex p-[5px] border-b border-black dark:border-white dark:bg-black bg-slate-100 text-black dark:text-white duration-300 -mx-4 flex-col h-dvh w-screen items-center justify-center gap-4 overflow-hidden ${
          showMenu ? "top-0" : "-top-[100vh]"
        }`}
      >
        {routes.map((route, index) => (
          <>
            <Link
              key={route.name + index}
              href={route.path}
              onClick={onShowMenu}
              className="text-xl font-labil px-4 py-2 hover:bg-white hover:text-black rounded-full duration-200"
            >
              {route.name}
            </Link>
          </>
        ))}

        <Separator className="w-24 my-4 bg-black dark:bg-white" />
        <ThemeSwitch />
      </nav>

      <Button
        onClick={() => onShowMenu()}
        className="w-10 h-10 z-20 sm:hidden rounded-full flex flex-col items-center justify-center gap-1 dark:bg-white bg-black"
      >
        <span
          className={`${
            showMenu ? "rotate-45 absolute" : ""
          } w-5 h-[2px] bg-white dark:bg-black block rounded-full duration-150`}
        />
        <span
          className={`${
            showMenu ? "hidden" : ""
          } w-5 h-[2px] bg-white dark:bg-black block rounded-full duration-150`}
        />
        <span
          className={`${
            showMenu ? "-rotate-45 absolute" : ""
          } w-5 h-[2px] bg-white dark:bg-black block rounded-full duration-150`}
        />
      </Button>
    </header>
  );
};

export default Header;
