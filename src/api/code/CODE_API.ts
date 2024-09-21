import { AxiosError } from "axios";
import { DataProps, ValidateCodeResponse } from "./types";
import API from "../axiosInstance";

class CODE_API {
  private API = API;

  async validateCode(data: DataProps): Promise<ValidateCodeResponse> {
    try {
      const request = await this.API.post(`/code/validate`, data);
      const response = request.data;

      return response as ValidateCodeResponse;
    } catch (err) {
      throw new AxiosError("Código Inválido");
    }
  }
}

export default new CODE_API();
