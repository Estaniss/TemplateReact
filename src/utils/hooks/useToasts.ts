import { ToastOptions } from 'react-toastify';
import { Toastify } from '~/modules';

type Position = 'top-right' | 'top-center' | 'bottom-center' | undefined;

type ToastActions = {
  showError: (message: string, position?: Position) => void;
  showSuccess: (message: string, position?: Position) => void;
  showInfo: (message: string, position?: Position) => void;
  showWarning: (message: string, position?: Position) => void;
};

const AUTO_CLOSE = 5000;
const defaultOptions: ToastOptions = {
  autoClose: AUTO_CLOSE,
  theme: 'colored',
};

export const useToasts = (): ToastActions => ({
  showInfo: (message: string, position?: Position): void => {
    Toastify.toast(message, {
      type: 'info',
      position,
    });
  },
  showError: (message: string, position?: Position): void => {
    Toastify.toast(message, {
      type: 'error',
      position,
      ...defaultOptions,
    });
  },
  showSuccess: (message: string, position?: Position): void => {
    Toastify.toast(message, {
      type: 'success',
      position,
      ...defaultOptions,
    });
  },
  showWarning: (message: string, position?: Position): void => {
    Toastify.toast(message, {
      type: 'warning',
      position,
      ...defaultOptions,
    });
  },
});
