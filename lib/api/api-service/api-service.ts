import axios from "axios";

export class ApiService {
  constructor() {}

  public async fetchUserById(id: number) {
    let response 
    try {
      response = axios.get(`http://localhost:3000/api/user-data/${id}`);
    } catch (error) {
      console.log(error);
    }
     return response
  }
}
