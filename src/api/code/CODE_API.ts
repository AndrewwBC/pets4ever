import axios, { AxiosError, AxiosInstance } from "axios";
import { DataProps, ValidateCodeResponse } from "./types";

class CODE_API {
  private token;

  private getApi(): AxiosInstance {
    const api = axios.create({
      baseURL: import.meta.env.VITE_API,
      headers: { Authorization: `Bearer ${this.token}` },
    });
    return api;
  }

  constructor() {
    const storagedToken = localStorage.getItem("token");
    if (storagedToken) this.token = storagedToken;
  }

  async validateCode(data: DataProps): Promise<ValidateCodeResponse> {
    try {
      const request = await this.getApi().post(`/api/v1/code/validate`, data);
      const response = request.data;
      console.log(request);
      return response as ValidateCodeResponse;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw new Error(err.response?.data.message);
      }
      throw new Error("Código Inválido.");
    }
  }
}

export default new CODE_API();
