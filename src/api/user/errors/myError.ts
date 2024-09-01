import { AxiosError } from "axios";

class MyError extends AxiosError {
  public data: any;
  public status: number;
  public code: string | undefined;

  constructor(
    message: string,
    name: string,
    data: any,
    status: number,
    code?: string
  ) {
    super(message);
    this.name = name;
    this.data = data;
    this.status = status;
    this.code = code;
  }
}

export default MyError;
