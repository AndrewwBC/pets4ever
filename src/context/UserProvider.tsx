import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import USER_API from "../api/user/USER_API";
import { FullDogLoader } from "../components/FullDogLoader";
import { UserProps } from "../types/user";

interface UserContextProps {
  user: UserProps | null;
  retrieveUser: (loading: boolean) => Promise<void>;
  clearUser: () => Promise<void>;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  retrieveUser: async () => {},
  clearUser: async () => {},
});

function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(user);

  async function retrieveUser(loading: boolean) {
    try {
      loading && setIsLoading(true);
      const data = await USER_API.user();
      setUser(data);
    } catch (error) {
    } finally {
      const timer = setTimeout(() => {
        loading && setIsLoading(false);
        clearTimeout(timer);
      }, 1000);
    }
  }

  async function clearUser() {
    try {
      const response = await USER_API.logout();
      if (response) {
        setUser(null);
      }
    } catch (error) {}
  }

  const contextValue = useMemo(
    () => ({
      user,
      retrieveUser,
      clearUser,
    }),
    [user]
  );

  if (isLoading)
    return (
      <FullDogLoader text="Carregando seus dados..." transparent={false} />
    );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export default UserProvider;

export function useUser() {
  return useContext(UserContext);
}
