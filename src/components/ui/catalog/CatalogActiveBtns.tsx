"use client";

import { useAppSelector } from "@/typescript/redux/store";
import CatalogProductBtn from "./CatalogProductBtn";
import CatalogCounter from "./CatalogCounter";
import { CartItem } from "@/types/CartItemType";
import Link from "next/link";
import { pathRouter } from "@/routes/router";

type CatalogActiveBtnsProps = {
  accum: CartItem;
};

const batteryPath = pathRouter.BATTERY;

export default function CatalogActiveBtns(props: CatalogActiveBtnsProps) {
  const itemAmount = useAppSelector((state) => {
    const item = state.cartSlice.cartArr.find(
      (item) => item.id === props.accum.id,
    );
    return item?.amount || 0;
  });

  return (
    <div className="w-full pt-1 flex flex-col">
      <div className="flex items-center justify-between gap-1">
        <span className="px-1.5 py-0.5 bg-green-100 text-green-600 text-[10px] rounded-md font-medium">
          В наличии
        </span>
        <Link
          href={batteryPath + "/" + props.accum.id}
          className="text-gray-500 border border-gray-300 px-1.5 py-0.5 rounded-md hover:border-emerald-400 hover:text-emerald-500 hover:bg-emerald-50 transition-all duration-200 text-[10px] font-medium"
        >
          Подробнее
        </Link>
      </div>

      <p className="text-xs font-semibold text-gray-800 mt-1 truncate">
        {props.accum.brand}
      </p>
      <p className="text-[11px] text-gray-600 truncate">{props.accum.name}</p>

      <div className="flex items-center justify-between mt-1">
        <p className="text-sm font-bold text-neutral-800">
          {props.accum.price.toLocaleString("ru-RU")} ₽
        </p>
        {itemAmount ? (
          <CatalogCounter amount={itemAmount} acc={props.accum} />
        ) : (
          <CatalogProductBtn acc={props.accum} />
        )}
      </div>
    </div>
  );
}
