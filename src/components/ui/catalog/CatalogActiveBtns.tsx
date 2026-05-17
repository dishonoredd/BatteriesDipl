"use client";

import { useAppSelector } from "@/typescript/store";
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
    <section className=" rounded-b-lg w-full min-h-50 py-5 px-2 flex flex-col justify-start grow">
      <div className="flex items-center justify-between">
        <span className="px-3 py-1 bg-green-100 text-green-500 text-sm rounded-xl font-medium">
          В наличии
        </span>
        <Link
          href={batteryPath + "/" + props.accum.id}
          className="text-neutral-600 border border-neutral-300 px-3 py-1 rounded-xl hover:border-emerald-400 hover:text-emerald-500 hover:bg-emerald-50 transition-all duration-200 text-sm font-medium"
        >
          Подробнее
        </Link>
      </div>
      <p className="text-md py-6">{props.accum.name}</p>

      <div className="h-full flex justify-between items-end">
        <p className="text-xl font-bold text-[#222]">
          {props.accum.price.toLocaleString("ru-RU")} ₽
        </p>{" "}
        {itemAmount ? (
          <CatalogCounter amount={itemAmount} acc={props.accum} />
        ) : (
          <CatalogProductBtn acc={props.accum} />
        )}
      </div>
    </section>
  );
}
