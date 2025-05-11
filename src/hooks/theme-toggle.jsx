"use client";

import { Button } from "@/components/ui/button";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="border-radius:[9999px] flex items-center justify-center"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "dark" ? (
        <FaMoon className="w-10 h-10" />
      ) : (
        <FaSun className="w-10 h-10" />
      )}
    </Button>
  );
};

export default ThemeToggle;