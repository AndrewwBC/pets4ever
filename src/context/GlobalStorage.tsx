import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface GlobalStorageProps {
  children: ReactNode;
}

interface StateProps {
  name: string;
}

interface ContextProps {
  data: {
    name: string;
  };
  setData: Dispatch<SetStateAction<StateProps>>;
}

export const GlobalContext = createContext<ContextProps>({
  data: {
    name: "",
  },
  setData: useState,
});

interface GlobalStorageProps {
  children: ReactNode;
}

export function GlobalStorage({ children }: GlobalStorageProps) {
  const [data, setData] = useState<StateProps>({
    name: "",
  });

  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
}
