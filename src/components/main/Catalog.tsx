import { accumlist } from "../../db/accumslist";
import Image from "next/image";
import CatalogActiveBtns from "../ui/catalog/CatalogActiveBtns";
import CatalogFavIcon from "../ui/catalog/CatalogFavIcon";

export default function Catalog() {
  return (
    <section>
      <h2 className="text-left py-16 font-semibold text-2xl text-[#222] max-w-400 mx-auto">
        Каталог аккумуляторов
      </h2>
      <ul className=" max-w-400 mx-auto grid grid-cols-5 gap-12">
        {accumlist.map((accum) => (
          <li
            key={accum.id}
            className="h-full flex flex-col p-2 shadow-md rounded-2xl bg-white "
          >
            <div className="relative w-full h-50">
              <Image
                src={accum.img}
                alt="Товар 1"
                fill
                className="w-full h-50 rounded-md"
              />
              <CatalogFavIcon acc={accum} />
            </div>
            <CatalogActiveBtns accum={{ ...accum, amount: 0 }} />
          </li>
        ))}
      </ul>
    </section>
  );
}
