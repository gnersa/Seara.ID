"use client";

import { useEffect, useState } from "react";
import { Icons } from "./Icons";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem("seara-theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => { const initial = getInitialTheme(); setTheme(initial); document.documentElement.dataset.theme = initial; }, []);
  const update = (next: Theme) => { setTheme(next); localStorage.setItem("seara-theme", next); document.documentElement.dataset.theme = next; };
  const CurrentIcon = theme === "dark" ? Icons.moon : Icons.sun;
  return (
    <div className="themeMenu hoverMenu">
      <button className="themeButton" aria-label="Ubah tema" type="button"><CurrentIcon className="navSvg"/><span>{theme === "dark" ? "Dark" : "Light"}</span><span className="chevron">⌄</span></button>
      <div className="smallDropdown themeDropdown">
        <button onClick={()=>update("light")} className={theme === "light" ? "active" : ""}><Icons.sun/> Light</button>
        <button onClick={()=>update("dark")} className={theme === "dark" ? "active" : ""}><Icons.moon/> Dark</button>
      </div>
    </div>
  );
}
