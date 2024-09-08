import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { UserProps } from "../api/user/types/profileResponse";
import USER_API from "../api/user/USER_API";
import { FullDogLoader } from "../components/FullDogLoader";

interface UserContextProps {
  user: UserProps | null;
  retrieveUser: () => Promise<void>;
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

  async function retrieveUser() {
    try {
      setIsLoading(true);
      const data = await USER_API.user();
      setUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      const timer = setTimeout(() => {
        console.log("Entrou no timer");
        setIsLoading(false);
        clearTimeout(timer);
      }, 2000);
    }
  }

  async function clearUser() {
    try {
      const response = await USER_API.logout();
      if (response) {
        setUser(null);
        alert(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const contextValue = useMemo(
    () => ({
      user,
      retrieveUser,
      clearUser,
    }),
    [user]
  );

  if (isLoading) return <FullDogLoader />;

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export default UserProvider;

export function useUser() {
  return useContext(UserContext);
}
