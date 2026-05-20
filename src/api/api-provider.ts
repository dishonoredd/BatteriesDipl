import axios from "axios";

export class ApiProvider {
  async getData() {}

  async getDataById(url: string, id: string) {
    try {
      const data = await axios.get(url + "/" + id);
      console.log("данные", data.data);
      return data.data;
    } catch (error) {
      console.error("Ошибка получения данных", error);
    }
  }
}
