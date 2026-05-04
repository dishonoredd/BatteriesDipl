import { ApiProvider } from "@/api/api-provider";
import { AccumType } from "@/types/AccumType";

const api = new ApiProvider();

const url = "";

export default async function Battery({ params }: { params: { id: string } }) {
  const { id } = await params;

  const battery: AccumType = await api.getDataById(
    "https://jsonplaceholder.typicode.com/posts",
    id,
  );

  return <>{battery.id}</>;
}
