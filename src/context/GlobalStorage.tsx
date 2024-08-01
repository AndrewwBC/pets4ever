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
  email: string;
  userProfileImgUrl: string;
}

interface ContextProps {
  data: {
    name: string;
    email: string;
    userProfileImgUrl: string;
  };
  setData: Dispatch<SetStateAction<StateProps>>;
}

export const GlobalContext = createContext<ContextProps>({
  data: {
    name: "",
    email: "",
    userProfileImgUrl: "",
  },
  setData: useState,
});

interface GlobalStorageProps {
  children: ReactNode;
}

export function GlobalStorage({ children }: GlobalStorageProps) {
  const [data, setData] = useState<StateProps>({
    name: "",
    email: "",
    userProfileImgUrl: "",
  });

  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
}
