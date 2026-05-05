"use client";

import { AccumType } from "@/types/AccumType";
import { addItemToCart, useAppDispatch } from "@/typescript/store";

type CatalogBtnProps = {
  acc: AccumType;
};

export default function CatalogProductBtn(props: CatalogBtnProps) {
  const dispatch = useAppDispatch();

  function addAccToCart(accum: AccumType) {
    dispatch(addItemToCart(accum));
  }

  return (
    <button
      onClick={() => addAccToCart(props.acc)}
      className="border rounded-lg"
    >
      в корзину
    </button>
  );
}
