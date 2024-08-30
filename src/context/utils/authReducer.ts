import API from "../../api/axiosInstance";

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
      API.interceptors.request.use((request: any) => {
        request.headers = {
          Authorization: "Bearer " + localStorage.getItem("token"),
        };
        return request;
      });
      if (action.payload) {
        localStorage.setItem("token", action.payload);
      }
      return { ...state, token: action.payload };

    case ACTIONS.clearToken:
      API.interceptors.request.clear();
      localStorage.removeItem("token");

      return { ...state, token: null };

    default:
      console.error(
        `You passed an action.type: ${action.type} which doesn't exist`
      );
      return { token: null };
  }
};
