import { makeAutoObservable } from 'mobx';
import { DefaultThemeType } from '~/utils/types';

class GlobalStore {
  userTheme: DefaultThemeType = 'light';

  constructor() {
    makeAutoObservable(this);
  }
}

export default GlobalStore;
