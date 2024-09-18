import { AxiosError } from "axios";
import API from "../axiosInstance";
import MyError from "../user/errors/myError";
import { Comment } from "../../Pages/auth/ProfileWrapper/components/ProfileFeed/types";

class COMMENT_API {
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

  public comment(data: any): Promise<any> {
    return this.handleRequest(
      () => this.API.post("/comment/", data),
      "POST_COMMENT_ERROR"
    );
  }

  public getComments(postId: string): Promise<Comment[]> {
    return this.handleRequest<Comment[]>(
      () => this.API.get(`/comment/${postId}`),
      "GET_COMMENTS_ERROR"
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

export default new COMMENT_API();
