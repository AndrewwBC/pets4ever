import { Dispatch } from "react";

export interface AuthContextProps {
  state: {
    token: string | null;
  };
  setToken: (newToken: string) => void;
  clearToken: () => void;
}

export interface UseReducerProps {
  state: string;
  dispatch: Dispatch<{
    type: {
      ACTIONS: "setToken" | "clearToken";
    };
    payload: string;
  }>;
}
