import { AxiosError } from "axios";
import MyError from "../user/errors/myError";
import API from "../axiosInstance";

class StorieHttpService {
  private API = API;

  private async handleRequest<T>(
    callback: () => Promise<any>,
    errorName: string
  ): Promise<T> {
    try {
      const request = await callback();
      return request.data as T;
    } catch (err) {
      throw this.getMyError(err, errorName);
    }
  }

  public create(data: any) {
    return this.handleRequest(
      () => this.API.post("/storie/", data),
      "CREATE_STORIE_ERROR"
    );
  }

  private getMyError(err: any, name: string): MyError {
    const { message, response, code } = err as AxiosError;
    return new MyError(
      message,
      name,
      response?.data,
      response?.status ?? 0,
      code
    );
  }
}

export default new StorieHttpService();
