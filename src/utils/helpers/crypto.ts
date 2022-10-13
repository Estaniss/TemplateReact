import { CryptoJS } from '~/modules';

export const encryptData = (data: string, salt: string) =>
  CryptoJS.AES.encrypt(data, salt).toString();

export const decryptData = (ciphertext: string, salt: string) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, salt);
  try {
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (err) {
    return null;
  }
};
