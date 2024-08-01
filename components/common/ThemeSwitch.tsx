"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return <Skeleton className={"text-2xl h-12 w-12 rounded-full"} />;

  return (
    <Button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={"text-2xl h-12 w-12 rounded-full"}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-8 w-8" />
      ) : (
        <Moon className="h-8 w-8" />
      )}
    </Button>
  );
}
