import { accumlist } from "../../db/accumslist";
import Image from "next/image";
import CatalogActiveBtns from "../ui/catalog/CatalogActiveBtns";
import Link from "next/link";

export default function Catalog() {
  return (
    <>
      <h2 className="text-center p-24 text-4xl ">Каталог аккумуляторов</h2>
      <ul className="w-400 mx-auto grid grid-cols-5 gap-12">
        {accumlist.map((accum) => (
          <li
            key={accum.id}
            className="h-full flex flex-col shadow-md rounded-lg bg-white"
          >
            <Link href={`/battery/${accum.id}`}>
              <Image
                src={accum.img}
                alt="Товар 1"
                width={230}
                height={600}
                className="w-full h-50 rounded-t-lg"
              />{" "}
            </Link>
            <CatalogActiveBtns accum={accum} />
          </li>
        ))}
      </ul>
    </>
  );
}
