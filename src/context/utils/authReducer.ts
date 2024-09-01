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
let myInterceptor: number | null = null;

export const authReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTIONS.setToken:
      if (action.payload) {
        localStorage.setItem("token", action.payload);
      }

      if (myInterceptor !== null) {
        API.interceptors.request.eject(myInterceptor);
      }

      myInterceptor = API.interceptors.request.use((request: any) => {
        const token = action.payload;
        if (token) {
          request.headers.Authorization = `Bearer ${token}`;
        }
        return request;
      });
      return { ...state, token: action.payload };

    case ACTIONS.clearToken:
      if (myInterceptor !== null) {
        API.interceptors.request.eject(myInterceptor);
        myInterceptor = null;
      }

      localStorage.removeItem("token");

      return { ...state, token: null };

    default:
      console.error(
        `You passed an action.type: ${action.type} which doesn't exist`
      );
      return { token: null };
  }
};
