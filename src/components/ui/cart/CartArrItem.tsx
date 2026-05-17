import { CartItem } from "@/types/CartItemType";
import CartActiveBtns from "./CartActiveBtns";
import Image from "next/image";
import CatalogCounter from "../catalog/CatalogCounter";
import Link from "next/link";
import { pathRouter } from "@/routes/router";

type CartArrP = {
  item: CartItem;
};

export default function CartArrItem(props: CartArrP) {
  const baterryPath = pathRouter.BATTERY;

  return (
    <li
      key={props.item.id}
      className="flex p-4  bg-gray-50 rounded-2xl duration-100 hover:bg-neutral-100"
    >
      <div className="relative w-46 h-36 shrink-0 rounded-xl overflow-hidden">
        <Image
          src={props.item.img}
          alt={props.item.name}
          fill
          className="object-cover"
          sizes="184px"
        />
      </div>
      <div className="flex flex-col w-3/5">
        <div className="flex flex-col justify-between h-full ml-3">
          <p className="text-[#333] text-lg">{props.item.name}</p>
          <div className="w-fit px-4 py-1.5  bg-green-100 text-green-500 text-sm rounded-xl font-medium">
            В наличии
          </div>

          <CartActiveBtns acc={props.item} />
        </div>
      </div>
      <div className="w-1/5">
        <p className="text-rose-400 text-lg font-bold">
          {props.item.price.toLocaleString("ru-RU")} ₽
        </p>
        <p className="text-neutral-500 text-md font-semibold">за шт.</p>
      </div>
      <div className="w-1/5 flex items-start justify-end">
        <div className="flex flex-col items-end justify-between h-full w-40">
          <CatalogCounter amount={props.item.amount} acc={props.item} />
          {/* <Link
            href={baterryPath + "/" + props.item.id}
            className="text-neutral-600 border border-neutral-300 px-4 py-1.5 rounded-xl
                       hover:border-rose-400 hover:text-rose-500 hover:bg-rose-50 transition-all duration-200 text-sm font-medium"
          >
            Подробнее
          </Link> */}
          <Link
            href={baterryPath + "/" + props.item.id}
            className="text-neutral-400 hover:text-rose-500 transition-colors duration-200 text-sm font-medium flex items-center gap-1"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </li>
  );
}
