import { ReactNode, createContext, useState } from "react";

export const GlobalContext = createContext("");

interface GlobalStorageProps {
  children: ReactNode;
}

// GlobalStorage é só uma facilitação para usar o contexto

export function GlobalStorage({ children }: GlobalStorageProps) {
  const [data, setData] = useState({
    name: ""
  });

  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
}
