// import {
//   createContext,
//   ReactNode,
//   useContext,
//   useEffect,
//   useMemo,
//   useState,
// } from "react";

// interface UserContextProps {
//   user: {
//     name: string;
//     profileImgUrl: string;
//   };
//   setUser: () => void;
// }

// const UserContext = createContext<UserContextProps>({
//   user: {
//     name: "",
//     profileImgUrl: "",
//   },
//   setUser() {},
// });

// function UserProvider({ children }: { children: ReactNode }) {
//   ///const [user, setUser_] = useState<any>();

//   useEffect(() => {});

//   function setUser() {
//     //setUser_();
//   }

//   const contextValue = useMemo(
//     () => ({
//       user,
//       setUser,
//     }),
//     []
//   );

//   return (
//     <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
//   );
// }

// export default UserProvider;

// export function useUser() {
//   return useContext(UserContext);
// }
