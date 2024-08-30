import { AxiosError } from "axios";
import SignInError from "./errors/myError";
import MyError from "./errors/myError";
import { SignInResponse, SignUpProps } from "./types/types";
import { ProfileResponse } from "./types/profileResponse";
import { UpdateDataProps } from "./types/update";
import API from "../axiosInstance";

class UserHttpService {
  private API = API;

  async signIn(data: any): Promise<SignInResponse> {
    try {
      const request = await this.API.post("/auth/signin", data);
      const response = await request.data;

      return response as SignInResponse;
    } catch (err) {
      throw this.getMyError(err, "SIGNIN_ERROR");
    }
  }

  async singnInWithSession(): Promise<SignInResponse> {
    try {
      const request = await this.API.get("/user/session", {});

      const response = await request.data;

      return response as SignInResponse;
    } catch (err) {
      throw new Error("Token inválido ou expirado!");
    }
  }

  async signup({ registerData }: SignUpProps): Promise<any> {
    try {
      const request = await this.API.post("/user", {
        name: registerData.name,
        email: registerData.email,
        password: registerData.senha,
      });

      const response = await request.data;

      return response;
    } catch (err) {
      throw this.getMyError(err, "SIGNUP_ERROR");
    }
  }

  async profile(userId: string): Promise<ProfileResponse> {
    try {
      const request = await this.API.get(`/user/${userId}`);

      return request.data as ProfileResponse;
    } catch (err) {
      console.log(err);
      throw this.getMyError(err, "PROFILE_ERROR");
    }
  }

  async update(data: UpdateDataProps, userId: string): Promise<any> {
    try {
      const request = await this.API.put(`/user/${userId}`, data);

      if (request) {
        return request;
      }
    } catch (err) {
      throw this.getMyError(err, "UPDATE_ERROR");
    }
  }

  // futuramente ira mudar bio/imagem
  async updateName(
    data: { name: string },
    userId: string
  ): Promise<{
    message: string;
  }> {
    try {
      const request = await this.API.patch(`/user/name/${userId}`, data, {});

      return request.data as { message: string };
    } catch (err) {
      throw this.getMyError(err, "UPDATE_NAME_ERROR");
    }
  }

  async updateEmail(
    data: { email: string },
    userId: string
  ): Promise<{
    message: string;
  }> {
    try {
      const request = await this.API.patch(`/user/email/${userId}`, data);

      console.log(request.data);
      return request.data as { message: string };
    } catch (err) {
      throw this.getMyError(err, "UPDATE_EMAIL_ERROR");
    }
  }

  async delete(userId: string): Promise<any> {
    try {
      const request = await this.API.delete(`/user/${userId}`);

      return request;
    } catch (err) {
      throw this.getMyError(err, "DELETE_ERROR");
    }
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
