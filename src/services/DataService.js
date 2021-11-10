import http from "../http-common";

class DataService {
  getAllUsers() {
    return http.get("/User");
  }

  async registerUser(data) {
    const response = await http.post("/User", data);
    return response.data;
  }
}

export default new DataService();
