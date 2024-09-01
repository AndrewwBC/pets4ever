import { AxiosError } from "axios";
import API from "../../api/axiosInstance";

let myInterceptor: number | null = null;

export function useInterceptor(token: string) {
  if (myInterceptor !== null) {
    API.interceptors.request.eject(myInterceptor);
  }

  myInterceptor = API.interceptors.request.use((request: any) => {
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  });

  API.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      console.log(error.response?.data);
      if (error.response && error.response.status === 401) {
        if (error.response.data === "Invalid token") {
          console.log("Entrou antes de removeItem", error.response.data);
          localStorage.removeItem("token");
          localStorage.removeItem("userId");

          window.location.href = "/login";
        }
      }
    }
  );
}

export function ejectInterceptor() {
  if (myInterceptor !== null) {
    API.interceptors.request.eject(myInterceptor);
    myInterceptor = null;
  }
}