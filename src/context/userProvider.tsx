import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const UserContext = createContext<any>({});

function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser_] = useState();

  useEffect(() => {});

  function setUser() {}

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    []
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export default UserProvider;

export function useUser() {
  return useContext(UserContext);
}
