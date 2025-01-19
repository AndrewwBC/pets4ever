import { AxiosError } from "axios";
import API from "../axiosInstance";

class EMAIL_API {
  private API = API;

  async sendCodeToEmail(email: any): Promise<any> {
    try {
      const request = await this.API.post(
        `/email/send/updateEmailCode/${email}`
      );
      const response = await request.data;

      return response;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw new AxiosError(err.response?.data);
      }
    }
  }

  async renewCodeToEmail(email: any): Promise<any> {
    try {
      const request = await this.API.post(
        `/email/send/renewUpdateEmailCode/${email}`
      );
      const response = await request.data;

      return response;
    } catch (err) {}
  }

  async forgotPassword(email: any): Promise<any> {
    try {
      const request = await this.API.post(
        `/email/send/forgotPassword/${email}`
      );
      const response = await request.data;
      return response;
    } catch (err) {}
  }
}

export default new EMAIL_API();
