import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import USER_API from "../api/user/USER_API";
import { FullDogLoader } from "../components/FullDogLoader";
import { UserProps } from "../types/user";

interface UserContextProps {
  user: UserProps | null;
  setUser: Dispatch<SetStateAction<UserProps | null>>;
  retrieveUser: (loading: boolean) => Promise<void>;
  clearUser: () => Promise<boolean | undefined>;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  retrieveUser: async () => {},
  clearUser: async () => false,
  setUser: () => {},
});

function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function retrieveUser(loading: boolean) {
    try {
      loading && setIsLoading(true);
      const data = await USER_API.user();
      console.log(data);
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
        return true;
      }
      return false;
    } catch (error) {}
  }

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
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
