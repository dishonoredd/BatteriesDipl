import { ApiProvider } from "@/api/api-provider";
import { accumlist } from "@/db/accumslist";
import { AccumType } from "@/types/AccumType";
import Image from "next/image";

const api = new ApiProvider();

const url = "https://jsonplaceholder.typicode.com/posts";

export default async function AccumsAdmin() {
  const batteries: AccumType[] = await api.getData(url);

  return (
    <div className="min-h-screen max-w-400 mx-auto">
      <input type="text" name="search" placeholder="Поиск по названию" />
      <ul className="grid grid-cols-5 gap-10">
        {/* {batteries.map((bat) => (
          <li key={bat.id}>
            <Image src={bat.img} alt="img" width={200} height={200} />
            <p>{bat.name}</p>
            <p>{bat.price}</p>
          </li>
        ))} */}
        {accumlist.map((bat) => (
          <li key={bat.id}>
            <div className="relative w-46 h-36 shrink-0 rounded-xl overflow-hidden">
              <Image
                src={bat.img}
                alt={bat.name}
                fill
                className="object-cover"
                sizes="184px"
              />
            </div>

            <p>{bat.name}</p>
            <p>{bat.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
