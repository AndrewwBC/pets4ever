import { createContext, Dispatch, SetStateAction, useState } from "react";

interface ThemeContextProps {
  systemTheme: string;
  setSystemTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
  systemTheme: "",
  setSystemTheme: () => "",
});

export default function ThemeContextProvider({ children }: any) {
  const [systemTheme, setSystemTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ systemTheme, setSystemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
