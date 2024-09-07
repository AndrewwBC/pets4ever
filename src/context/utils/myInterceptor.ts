import { AxiosError } from "axios";
import API from "../../api/axiosInstance";

let myInterceptor: number | null = null;

export function useInterceptor() {
  if (myInterceptor !== null) {
    API.interceptors.request.eject(myInterceptor);
  }

  myInterceptor = API.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response && error.response.status === 401) {
        if (error.response.data === "Invalid token") {
          console.log("Entrou antes de removeItem", error.response.data);

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
