import { AxiosError } from 'axios';

export type ErrorResponse = {
  message: string;
  status: number;
};

export type AxiosErrorResponse = AxiosError<ErrorResponse>;
