import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
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
  console.log("authProvider");
  const setToken = (newToken: string) => {
    dispatch({ type: "setToken", payload: newToken });
  };

  useEffect(() => {
    if (state.token) {
      useInterceptor(state.token);
      console.log("chamou interceptor");
    }
  }, [state.token]);

  const clearToken = () => {
    dispatch({ type: "clearToken", payload: null });
  };

  const contextValue = useMemo(
    () => ({
      state,
      setToken,
      clearToken,
    }),
    [state]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
