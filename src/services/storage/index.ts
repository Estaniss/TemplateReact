import { decryptData, encryptData } from '~/utils';
import Keys from './keys';

const Storage = window.localStorage;
const secretKey = import.meta.env.VITE_SECRET_KEY;

export default class StorageService {
  static clearWholeStorage(): void {
    Storage.clear();
  }

  static getToken(): AcessToken | null {
    const value = Storage.getItem(Keys.TOKEN) || '';
    const decryptedValue = decryptData(value, secretKey);
    return decryptedValue ? JSON.parse(decryptedValue) : null;
  }

  static setToken(token: AcessToken | null): void {
    const value = JSON.stringify(token);
    const encryptedValue = encryptData(value, secretKey);
    Storage.setItem(Keys.TOKEN, encryptedValue);
  }
}
