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
      className="flex flex-col sm:flex-row p-4 max-sm:bg-white sm:bg-gray-50  duration-100 hover:bg-neutral-100 gap-4 sm:gap-6"
    >
      <div className="relative w-full sm:w-46 h-48 sm:h-36 shrink-0 rounded-xl overflow-hidden mx-auto sm:mx-0 max-w-50">
        <Image
          src={props.item.img}
          alt={props.item.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 200px, 184px"
        />
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex flex-col h-full">
          <p className="text-[#333] text-lg sm:text-xl font-semibold text-center sm:text-left">
            {props.item.brand}
          </p>
          <p className="text-[#333] text-md sm:text-base text-center sm:text-left">
            {props.item.name}
          </p>
          <div className="mt-2 ">
            <CartActiveBtns acc={props.item} />
          </div>
          <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-lg font-medium whitespace-nowrap">
              {props.item.capacity} Ач
            </span>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-lg font-medium whitespace-nowrap">
              {props.item.voltage} В
            </span>
            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-lg font-medium whitespace-nowrap">
              {props.item.polarity}
            </span>
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-lg font-medium whitespace-nowrap">
              {props.item.standart}
            </span>
            <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-lg font-medium whitespace-nowrap">
              {props.item.technology}
            </span>
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg font-medium whitespace-nowrap">
              {props.item.sizeType}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row sm:flex-col justify-between max-sm:flex-col sm:justify-start items-center sm:items-end gap-4 sm:gap-2 mt-4 sm:mt-0 pt-4 sm:pt-0  ">
        <div className="text-center sm:text-right flex-1 sm:flex-none">
          <p className="text-neutral-700 text-lg sm:text-xl font-bold">
            {props.item.price.toLocaleString("ru-RU")} ₽
          </p>
          <p className="text-neutral-500 text-sm font-semibold">за шт.</p>
        </div>

        <div className="flex flex-row sm:flex-col items-end center gap-3 sm:gap-2 max-sm:items-center max-sm:gap-10">
          <CatalogCounter amount={props.item.amount} acc={props.item} />
          <Link
            href={baterryPath + "/" + props.item.id}
            className="text-neutral-400 hover:text-blue-600 transition-colors duration-200 text-sm font-medium flex items-center gap-1"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </li>
  );
}
