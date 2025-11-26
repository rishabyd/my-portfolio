"use client";
import { Button } from "@/components/ui/button";
import { Moon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }
  return (
    <Button
      className={`!${className} dark:hover:bg-input/30 hover:border-gray-500/40 hover:bg-input/30 cursor-pointer h-full duration-500 !hover:border     w-full"
     `}
      variant="outline"
      onClick={() => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
      }}
    >
      {theme === "dark" ? <SunIcon /> : <Moon />}
    </Button>
  );
}
