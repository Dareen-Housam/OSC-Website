"use client";

import { useTheme } from "./Theme-provider";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="toggle-icon" width={35} height={35} />
      ) : (
        <Sun className="toggle-icon" width={35} height={35} />
      )}
    </button>
  );
}
