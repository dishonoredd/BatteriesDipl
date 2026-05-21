import { ApiProvider } from "@/api/api-provider";
import AdminBatteriesCli from "@/components/ui/admin/batteries/BatteriesCliAdmin";
import { accumlist } from "@/db/accumslist";
import { AccumType } from "@/types/AccumType";

const api = new ApiProvider();

const url = "https://jsonplaceholder.typicode.com/posts";

export default async function AccumsAdmin() {
  const batteries: AccumType[] = await api.getData(url);

  return <AdminBatteriesCli batteries={accumlist} />;
}
