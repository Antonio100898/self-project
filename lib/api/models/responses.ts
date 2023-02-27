import { IContactLink } from "./user-contacts-model";
import { IUserInfo } from "./user-info-model";
import { IUserWebData } from "./user-webdata-model";

export type UserDataResponse = {
  url_nickname: string;
  userInfo: IUserInfo;
  userWebData: IUserWebData;
  contacts: IContactLink[]
};
