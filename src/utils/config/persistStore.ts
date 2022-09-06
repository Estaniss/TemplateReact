import { configurePersistable } from 'mobx-persist-store';

configurePersistable({
  debugMode: false,
  storage: localStorage,
});
