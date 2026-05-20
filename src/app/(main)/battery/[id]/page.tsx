import { ApiProvider } from "@/api/api-provider";
import { AccumType } from "@/types/AccumType";

const api = new ApiProvider();

const url = "https://jsonplaceholder.typicode.com/posts/";

// тут будут отрисовываться данные конкретного аккумулятора

export default async function Battery({ params }: { params: { id: string } }) {
  const { id } = await params;

  const battery: AccumType = await api.getDataById(url, id);

  return <>{battery.id}</>;
}
