import GlobalStore from "./global.store";

class RootStore {
  global: GlobalStore;

  constructor() {
    this.global = new GlobalStore();
  }
}

const store = new RootStore();

export default store;
