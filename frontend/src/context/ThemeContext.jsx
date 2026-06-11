import {
  createContext,
  useState,
  useEffect
} from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({
  children
}) {
  const [theme, setTheme] =
    useState("light");

body.light{
  background:#f5f5f5;
  color:black;
}

body.dark{
  background:#0f172a;
  color:white;
}

  const toggleTheme = () => {
    setTheme(
      theme === "light"
        ? "dark"
        : "light"
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}