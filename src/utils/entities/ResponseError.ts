import { AxiosErrorResponse } from '../types';

const defaultErrorMessage =
  'Erro inesperado. Verifique sua internet e tente novamente.';

export default class ResponseError {
  message = '';
  code = 0;

  constructor({ response }: AxiosErrorResponse) {
    this.message = response?.data.message || defaultErrorMessage;
    this.code = response?.status || 0;
  }
}
