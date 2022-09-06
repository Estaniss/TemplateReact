import { Theme, TypeOptions } from 'react-toastify';
import { Toastify } from '~/modules';

export const showToast = (
  message: string,
  type: TypeOptions = 'error',
  theme: Theme = 'dark',
): void => {
  Toastify.toast(message, {
    autoClose: 5000,
    type,
    theme,
  });
};
