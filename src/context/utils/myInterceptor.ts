import { AxiosError } from "axios";
import API from "../../api/axiosInstance";

let myInterceptor: number | null = null;

export function useInterceptor() {
  if (myInterceptor !== null) {
    API.interceptors.request.eject(myInterceptor);
  }

  API.interceptors.request.use((config) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      alert(token);
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  });

  myInterceptor = API.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response && error.response.status === 401) {
        if (error.response.data === "Invalid token") {
          alert("SESSÃO EXPIRADA");
          window.location.href = "/";
        }
      }

      return Promise.reject(error);
    }
  );
}

export function ejectInterceptor() {
  if (myInterceptor !== null) {
    API.interceptors.request.eject(myInterceptor);
    myInterceptor = null;
  }
}
