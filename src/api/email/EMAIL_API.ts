import axios, { Axios, AxiosError, AxiosInstance } from "axios";

class EMAIL_API {
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

  async sendCodeToEmail(email: any): Promise<any> {
    try {
      const request = await this.getApi().post(
        `/email/send/updateEmailCode/${email}`
      );
      const response = await request.data;

      return response;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw new AxiosError(err.response?.data);
      }
      console.log(err);
    }
  }

  async renewCodeToEmail(email: any): Promise<any> {
    try {
      const request = await this.getApi().post(
        `/email/send/renewUpdateEmailCode/${email}`
      );
      const response = await request.data;

      return response;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new EMAIL_API();
