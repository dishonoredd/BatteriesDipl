import { ApiProvider } from "@/api/api-provider";
import Battery from "@/components/ui/battery/Battery";
import NoBattery from "@/components/ui/battery/NoBattery";
import { accumlist } from "@/db/accumslist";
import { AccumType } from "@/types/AccumType";

const api = new ApiProvider();

const url = "https://jsonplaceholder.typicode.com/posts/";

// тут будут отрисовываться данные конкретного аккумулятора

export default async function BatteryById({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  // const battery: AccumType = await api.getDataById(url, id);

  const battery = accumlist.find((x) => x.id === id);

  return <>{battery ? <Battery battery={battery} /> : <NoBattery />}</>;
}
