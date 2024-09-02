import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { AuthContextProps } from "./types/authProviderTypes";
import { authReducer } from "./utils/authReducer";
import { useInterceptor } from "./utils/myInterceptor";

const AuthContext = createContext<AuthContextProps>({
  state: {
    token: "",
  },
  setToken() {},
  clearToken() {},
});

const initialData: {
  token: string | null;
} = {
  token: localStorage.getItem("token"),
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialData);
  useInterceptor(state.token!);

  const setToken = (newToken: string) => {
    dispatch({ type: "setToken", payload: newToken });
  };

  const clearToken = () => {
    dispatch({ type: "clearToken", payload: null });
  };

  const contextValue = useMemo(
    () => ({
      state,
      setToken,
      clearToken,
    }),
    [state.token]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
