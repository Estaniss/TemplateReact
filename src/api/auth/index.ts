import { ResponseError } from "~/utils";
import { AxiosErrorResponse, Credentials, UserInfo } from "~/utils/types";
import request from "../request";

export default class AuthApi {
  static login = async ({
    email,
    password,
  }: Credentials): Promise<UserInfo> => {
    try {
      const { data } = await request.post<UserInfo>("/login", {
        email,
        password,
      });
      return data;
    } catch (error) {
      throw new ResponseError(error as AxiosErrorResponse);
    }
  };

  static logout = async (): Promise<void> => {
    try {
      await request.post("/logout");
    } catch (error) {
      throw new ResponseError(error as AxiosErrorResponse);
    }
  };
}
