import { AxiosError } from "axios";
import API from "../axiosInstance";
import MyError from "../user/errors/myError";
import { PostProps } from "../../types/post";

interface UsernameAndPostIdProps {
  username: string;
  postId: string;
}

class PostHttpService {
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

  public patchPostLike(data: UsernameAndPostIdProps): Promise<PostProps> {
    return this.handleRequest<PostProps>(
      () => this.API.patch("/post/postlike", data),
      "PATCH_POST_LIKE"
    );
  }

  public patchPostDescription(data: any): Promise<any> {
    return this.handleRequest<any>(
      () => this.API.patch("/post/description", data),
      "PATCH_DESCRIPTION_ERROR"
    );
  }

  public show(data: ShowProps) {
    return this.handleRequest<PostProps>(
      () => this.API.get(`/post/show/${data.postId}/${data.username}`),
      "SHOW_POST"
    );
  }

  public delete(id: string) {
    return this.handleRequest<any>(
      () => this.API.delete(`/post/${id}`),
      "DELETE_POST_ERROR"
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

export default new PostHttpService();
