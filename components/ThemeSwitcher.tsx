"use client";

import { useEffect, useState } from "react";
import { Icons } from "./Icons";

type Theme = "light" | "dark" | "system";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = theme === "system" ? (systemDark ? "dark" : "light") : theme;
  root.dataset.theme = resolved;
  root.dataset.themePreference = theme;
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const saved = (localStorage.getItem("seara-theme") as Theme | null) || "system";
    setTheme(saved);
    applyTheme(saved);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      if ((localStorage.getItem("seara-theme") || "system") === "system") applyTheme("system");
    };
    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  function update(next: Theme) {
    setTheme(next);
    localStorage.setItem("seara-theme", next);
    applyTheme(next);
  }

  const CurrentIcon = theme === "light" ? Icons.sun : theme === "dark" ? Icons.moon : Icons.monitor;

  return (
    <div className="themeMenu hoverMenu">
      <button className="iconNavButton" aria-label="Theme" type="button">
        <CurrentIcon className="navSvg" />
      </button>
      <div className="smallDropdown themeDropdown">
        <button onClick={() => update("light")} className={theme === "light" ? "active" : ""}><Icons.sun /> Light</button>
        <button onClick={() => update("dark")} className={theme === "dark" ? "active" : ""}><Icons.moon /> Dark</button>
        <button onClick={() => update("system")} className={theme === "system" ? "active" : ""}><Icons.monitor /> System</button>
      </div>
    </div>
  );
}
