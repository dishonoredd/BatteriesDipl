import axios from "axios";

export class ApiProvider {
  async getData(url: string) {
    try {
      const data = await axios.get(url);
      console.log(data.data);
      return data.data;
    } catch (error) {
      console.error("Ошибка получения данных", error);
    }
  }

  async getDataById(url: string, id: string) {
    try {
      const data = await axios.get(url + "/" + id);
      return data.data;
    } catch (error) {
      console.error("Ошибка получения данных по айди", error);
    }
  }
}
