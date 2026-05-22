import axios, { AxiosError } from "axios";

export class ApiProvider {
  async getData(url: string) {
    try {
      const data = await axios.get(url);
      return data.data;
    } catch (error) {
      console.error("Ошибка получения данных", error);
      throw error;
    }
  }

  async getDataById(url: string, id: string) {
    try {
      if (!id || id.trim() === "") {
        throw new Error("ID не может быть пустым");
      }
      const data = await axios.get(url + "/" + id);
      return data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;

        switch (axiosError.response?.status) {
          case 404:
            console.warn(`Данные с ID ${id} не найдены (404)`);
            return null; // Возвращаем null для несуществующего ID

          case 400:
            console.error(`Неверный формат ID: ${id}`);
            return null;

          case 500:
            console.error("Ошибка сервера 500");
            throw new Error("Внутренняя ошибка сервера");

          default:
            console.error(
              `Неизвестная ошибка API: ${axiosError.response?.status}`,
            );
            return null;
        }
      }

      console.error("Ошибка получения данных по ID:", error);
      return null;
    }
  }
}
