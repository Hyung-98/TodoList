"use client";

import { useState, useEffect } from "react";

interface LayoutProps {
  title?: string;
}

const Header: React.FC<LayoutProps> = ({ title = "Todo App" }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-primary">{title}</h1>
      <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
        {darkMode ? "☀" : "🌙"}
      </button>
    </header>
  );
};

export default Header;
