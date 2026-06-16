"use client";

import { CartItem } from "@/types/CartItemType";
import { addItemToCart, useAppDispatch } from "@/typescript/redux/store";

type CatalogBtnProps = {
  acc: CartItem;
};

export default function CatalogProductBtn(props: CatalogBtnProps) {
  const dispatch = useAppDispatch();

  function addAccToCart(accum: CartItem) {
    dispatch(addItemToCart(accum));
  }

  return (
    <button
      onClick={() => addAccToCart(props.acc)}
      className="rounded-xl bg-[#333] text-white py-2 px-4 max-sm:text-[10px]
       sm:text-[12px] lg:font-medium duration-150 hover:bg-[#212121]"
    >
      В корзину
    </button>
  );
}
