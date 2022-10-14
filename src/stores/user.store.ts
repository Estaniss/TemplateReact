import { makeAutoObservable, runInAction } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { AuthApi } from "~/api";
import { Storage } from "~/services";
import { Credentials, UserInfo } from "~/utils/types";

class UserStore {
  userData: UserInfo | null = null;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "UserStore",
      properties: ["userData"],
    });
  }

  get getUserName(): string {
    return this.userData?.name ?? "";
  }

  login = async (credentials: Credentials): Promise<void> => {
    const fakeToken = {
      access_token: "token",
    };
    Storage.setToken(fakeToken); // just for route testing
    const data = await AuthApi.login(credentials);
    Storage.setToken(data.token || "");
    runInAction(() => {
      this.userData = data || {};
    });
  };

  logout = (): void => {
    runInAction(() => {
      this.userData = null;
      Storage.clearWholeStorage();
    });
  };
}

export default UserStore;
