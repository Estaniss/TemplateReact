import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { isEmpty } from "~/modules";
import { Routes } from "~/routes";
import { Storage } from "~/services";
import { ExpiredSessionError } from "~/utils";
import { browserHistory } from "../App";

interface CustomRequest {
  authorization?: string;
}

export const successResponse = (response: AxiosResponse): AxiosResponse =>
  response;

export const addAuthHeaders = (
  config: AxiosRequestConfig
): AxiosRequestConfig & CustomRequest => {
  const acessToken: AcessToken | null = Storage.getToken();
  if (!acessToken || isEmpty(acessToken)) {
    return config;
  }
  return {
    ...config,
    headers: {
      authorization: `Bearer ${acessToken.token}`,
    },
  };
};

export const verifyExpiredToken = (error: AxiosError): void => {
  const expiredSessionError = 403;
  if (error.response?.status === expiredSessionError) {
    Storage.setToken(null);
    browserHistory.push(Routes.LOGIN);
    throw new ExpiredSessionError();
  }
  throw error;
};
