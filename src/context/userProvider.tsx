import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { UserProps } from "../api/user/types/profileResponse";
import USER_API from "../api/user/USER_API";

interface UserContextProps {
  user: UserProps;
  retrieveUser: () => Promise<any>;
}

interface UserContextStateProps {
  user: UserProps;
  setUser: Dispatch<SetStateAction<UserProps>>;
}

const UserContext = createContext<UserContextProps>({
  user: {
    email: "",
    userId: "",
    fullname: "",
    username: "",
    profileImgUrl: "",
    userPostsAndQuantityOfPosts: {
      posts: [],
      quantity: 0,
    },
    following: {
      followingList: [],
      quantity: 0,
    },
    followers: {
      followersList: [],
      quantity: 0,
    },
  },
  async retrieveUser() {},
});

function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserContextStateProps>();

  async function retrieveUser() {
    try {
      const data = await USER_API.user();
      console.log("Data " + data);
      setUser(data);

      return;
    } catch (error) {
      console.log(error);
    }
  }

  const contextValue = useMemo(
    () => ({
      user,
      retrieveUser,
    }),
    [user]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export default UserProvider;

export function useUser() {
  return useContext(UserContext);
}
