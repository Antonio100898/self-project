import axios, { AxiosResponse } from "axios";
import { UserDataResponse } from "../models/responses";

export const ApiService = {
  async fetchUser(url_nickname:string) {
    try {
      const response = await axios.get<AxiosResponse<UserDataResponse>>(
        `http://localhost:3000/api/user-data/${url_nickname}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
