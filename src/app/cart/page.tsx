"use client";

import CatalogCounter from "@/components/ui/catalog/CatalogCounter";
import {
  deleteItemFromCartFinally,
  useAppDispatch,
  useAppSelector,
} from "@/typescript/store";
import Image from "next/image";
import { useMemo } from "react";

export default function Cart() {
  const cartArr = useAppSelector((state) => state.cartSlice.cartArr);

  const dispatch = useAppDispatch();

  function deleteFromCart(id: string) {
    dispatch(deleteItemFromCartFinally(id));
  }

  const totalPrice = useMemo(() => {
    return cartArr.reduce((sum, item) => {
      const amount = item.amount !== undefined ? item.amount : 1;
      return sum + item.price * amount;
    }, 0);
  }, [cartArr]);

  console.log("render");

  return (
    <ul>
      <p>Общая сумма корзины: {totalPrice}</p>
      {cartArr.map((item) => (
        <li key={item.id}>
          <Image src={item.img} alt={"img"} width={200} height={200} />
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.adds}</p>
          <p>количество тавара {item.amount}</p>
          <CatalogCounter amount={item.amount} acc={item} />
          <button onClick={() => deleteFromCart(item.id)}>
            удалить ез горзенге
          </button>
        </li>
      ))}
    </ul>
  );
}
