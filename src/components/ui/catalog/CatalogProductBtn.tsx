"use client";

import { CartItem } from "@/types/CartItemType";
import { addItemToCart, useAppDispatch } from "@/typescript/store";

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
      className=" border-2 border-[#333] rounded-lg bg-[#333] text-white p-2
       duration-150 hover:bg-white hover:text-[#222] hover:border-[#222] hover:font-bold"
    >
      В корзину
    </button>
  );
}
