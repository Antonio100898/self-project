import { IUserInfo } from "./user-info-model";
import { IUserWebData } from "./user-webdata-model";

export type UserDataResponse = {
  id: number
  userInfo: IUserInfo;
  userWebData: IUserWebData;
}

