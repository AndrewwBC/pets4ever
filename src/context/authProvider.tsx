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
import API from "../api/axiosInstance";

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
    let myInterceptor: number | null = null;

    if (myInterceptor !== null) {
      API.interceptors.request.eject(myInterceptor);
    }

    myInterceptor = API.interceptors.request.use((request: any) => {
      const token = state.token;
      if (token) {
        request.headers.Authorization = `Bearer ${token}`;
      }
      return request;
    });
  }, []);

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
