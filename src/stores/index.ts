import GlobalStore from "./global.store";
import UserStore from "./user.store";

class RootStore {
  global: GlobalStore;
  user: UserStore;

  constructor() {
    this.global = new GlobalStore();
    this.user = new UserStore();
  }
}

const store = new RootStore();

export default store;
