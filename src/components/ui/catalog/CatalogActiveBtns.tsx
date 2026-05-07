"use client";

import { useAppSelector } from "@/typescript/store";
import CatalogProductBtn from "./CatalogProductBtn";
import CatalogCounter from "./CatalogCounter";
import { CartItem } from "@/types/CartItemType";
import CatalogFavIcon from "./CatalogFavIcon";

type CatalogActiveBtnsProps = {
  accum: CartItem;
};

export default function CatalogActiveBtns(props: CatalogActiveBtnsProps) {
  const itemAmount = useAppSelector((state) => {
    const item = state.cartSlice.cartArr.find(
      (item) => item.id === props.accum.id,
    );
    return item?.amount || 0;
  });

  return (
    <div className=" rounded-b-lg w-full min-h-50 py-5 px-3 flex flex-col justify-start grow">
      <p className="text-xl min-h-17">{props.accum.name}</p>
      {itemAmount ? (
        <CatalogCounter amount={itemAmount} acc={props.accum} />
      ) : (
        <CatalogProductBtn acc={props.accum} />
      )}
      <div className="mt-3 flex justify-between items-center">
        <p className="text-2xl">Цена: {props.accum.price} ₽</p>
        <CatalogFavIcon acc={props.accum} />
      </div>
    </div>
  );
}
