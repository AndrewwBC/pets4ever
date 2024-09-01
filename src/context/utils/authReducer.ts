import { ejectInterceptor, useInterceptor } from "./myInterceptor";

const ACTIONS = {
  setToken: "setToken",
  clearToken: "clearToken",
};
type State = { token: string | null };

type Action = {
  type: "setToken" | "clearToken";
  payload: string | null;
};

export const authReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTIONS.setToken:
      if (action.payload) {
        localStorage.setItem("token", action.payload);
        useInterceptor(action.payload);
      }

      return { ...state, token: action.payload };

    case ACTIONS.clearToken:
      ejectInterceptor();
      localStorage.removeItem("token");
      localStorage.removeItem("userId");

      return { ...state, token: null };

    default:
      console.error(
        `You passed an action.type: ${action.type} which doesn't exist`
      );
      return { token: null };
  }
};
