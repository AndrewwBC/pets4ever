import { createContext, ReactNode, useContext, useMemo, useState } from "react";

interface ThemeContextProps {
  systemTheme: string;
  setSystemTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  systemTheme: "",
  setSystemTheme() {},
});

function getInitialData() {
  const theme = localStorage.getItem("theme");
  if (theme) return theme;
  return "light";
}

function ChangeThemeProvider({ children }: { children: ReactNode }) {
  const [systemTheme, setSystemTheme_] = useState(getInitialData());

  function setSystemTheme() {
    if (systemTheme === "light") {
      setSystemTheme_("darkTheme");
      localStorage.setItem("theme", "darkTheme");
    } else {
      setSystemTheme_("light");
      localStorage.setItem("theme", "light");
    }
  }

  const contextValue = useMemo(
    () => ({
      systemTheme,
      setSystemTheme,
    }),
    [systemTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};

export default ChangeThemeProvider;
