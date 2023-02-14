import axios, { AxiosResponse } from "axios";
import { UserDataResponse } from "../models/responses";

export const ApiService = {
  async fetchUserById(id: number) {
    try {
      const response = await axios.get<AxiosResponse<UserDataResponse>>(
        `http://localhost:3000/api/user-data/${id}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
