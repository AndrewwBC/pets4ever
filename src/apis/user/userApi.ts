import axios, { AxiosError } from "axios";
import SignInError from "./errors/myError";
import MyError from "./errors/myError";
import { SignInResponse, SignUpProps } from "./types/types";
import { ProfileResponse } from "./types/profileResponse";
import { UpdateDataProps } from "./types/update";

class UserHttpService {
  private api = axios.create({
    baseURL: import.meta.env.VITE_API,
  });

  private getToken() {
    const token = localStorage.getItem("token");
    if (!token) return false;

    return token;
  }

  async signIn(data: any): Promise<SignInResponse> {
    try {
      const request = await this.api.post("api/v1/auth/signin", data);
      const response = await request.data;

      return response as SignInResponse;
    } catch (err) {
      throw this.getMyError(err, "SIGNIN_ERROR");
    }
  }

  async singnInWithSession(): Promise<SignInResponse> {
    const token = this.getToken();

    try {
      const request = await this.api.get("/api/v1/auth/loginwithsession", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const response = await request.data;

      return response as SignInResponse;
    } catch (err) {
      throw new Error("Token inválido ou expirado!");
    }
  }

  async signup({ registerData }: SignUpProps): Promise<any> {
    try {
      const request = await this.api.post("api/v1/user", {
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
    const token = this.getToken();

    try {
      const request = await this.api.get(`api/v1/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return request.data as ProfileResponse;
    } catch (err) {
      console.log(err);
      throw this.getMyError(err, "PROFILE_ERROR");
    }
  }

  async update(data: UpdateDataProps, userId: string): Promise<any> {
    const token = this.getToken();

    try {
      const request = await this.api.put(`api/v1/user/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (request) {
        return request;
      }
    } catch (err) {
      throw this.getMyError(err, "UPDATE_ERROR");
    }
  }

  async delete(userId: string): Promise<any> {
    const token = localStorage.getItem("token");

    try {
      const request = await this.api.delete(`api/v1/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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
