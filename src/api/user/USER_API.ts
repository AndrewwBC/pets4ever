import { AxiosError } from "axios";
import SignInError from "./errors/myError";
import MyError from "./errors/myError";
import { SignInResponse, SignUpProps } from "./types/types";
import { UserProps } from "./types/profileResponse";
import { UpdateDataProps } from "./types/update";
import API from "../axiosInstance";

class UserHttpService {
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

  async signIn(data: any): Promise<any> {
    return this.handleRequest<any>(
      () => this.API.post("/auth/signin", data),
      "SIGNIN_ERROR"
    );
  }

  async signInWithSession(): Promise<SignInResponse> {
    return this.handleRequest<SignInResponse>(
      () => this.API.get("/user/session", {}),
      "SESSION_ERROR"
    );
  }

  async signup(registerData: SignUpProps): Promise<any> {
    return this.handleRequest<any>(
      () => this.API.post("/user", registerData),
      "SIGNUP_ERROR"
    );
  }

  async user(): Promise<UserProps> {
    return this.handleRequest<UserProps>(
      () => this.API.get(`/user`),
      "PROFILE_ERROR"
    );
  }

  async logout(): Promise<{
    message: string;
  }> {
    return this.handleRequest<any>(
      () => this.API.post("user/logout"),
      "LOGOUT_ERROR"
    );
  }

  async update(data: UpdateDataProps, userId: string): Promise<any> {
    return this.handleRequest<any>(
      () => this.API.put(`/user/${userId}`, data),
      "UPDATE_ERROR"
    );
  }

  async updateName(
    data: { name: string },
    userId: string
  ): Promise<{ message: string }> {
    return this.handleRequest<{ message: string }>(
      () => this.API.patch(`/user/name/${userId}`, data),
      "UPDATE_NAME_ERROR"
    );
  }

  async updateEmail(
    data: { email: string },
    userId: string
  ): Promise<{ message: string }> {
    return this.handleRequest<{ message: string }>(
      () => this.API.patch(`/user/email/${userId}`, data),
      "UPDATE_EMAIL_ERROR"
    );
  }

  async following(data: any): Promise<any> {
    return this.handleRequest<any>(
      () => this.API.patch(`/user/following`, data),
      "PATCH_FOLLOWER_ERROR"
    );
  }

  async delete(userId: string): Promise<any> {
    return this.handleRequest<any>(
      () => this.API.delete(`/user/${userId}`),
      "DELETE_ERROR"
    );
  }

  private getMyError(err: any, name: string): MyError {
    const { message, response, code } = err as AxiosError;
    return new SignInError(
      message,
      name,
      response?.data,
      response?.status ?? 0,
      code
    );
  }
}

export default new UserHttpService();
