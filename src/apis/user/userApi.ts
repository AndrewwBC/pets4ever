import axios, { AxiosError } from "axios";
import SignInError from "./errors/myError";
import MyError from "./errors/myError";

export interface SignInResponse {
  token: string;
  userId: string;
  email: string;
  username: string;
  userProfileImgUrl: string;
}

export interface SignUpProps {
  registerData: {
    name: string;
    email: string;
    senha: string;
  };
}

class UserHttpService {
  private api = axios.create({
    baseURL: import.meta.env.VITE_API,
  });

  public getToken() {
    const token = localStorage.getItem("token");
    if (!token) "Token não encontrado";

    return token;
  }

  async signIn(data: any): Promise<SignInResponse> {
    try {
      const request = await this.api.post("api/v1/auth/signin", data);
      const response = await request.data;

      return response as SignInResponse;
    } catch (err) {
      throw this.getMyError(err, "SignInError");
    }
  }

  async singnInWithSession(token: string): Promise<SignInResponse> {
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
      const request = await this.api.post("api/v1/user/signup", {
        name: registerData.name,
        email: registerData.email,
        password: registerData.senha,
      });

      const response = await request.data;

      return response;
    } catch (err) {
      throw this.getMyError(err, "SignUpError");
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
