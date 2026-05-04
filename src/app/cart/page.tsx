"use client";

import {
  deleteItemFromCart,
  useAppDispatch,
  useAppSelector,
} from "@/typescript/store";
import Image from "next/image";

export default function Cart() {
  const cartArr = useAppSelector((state) => state.cartSlice.cartArr);

  const dispatch = useAppDispatch();

  function deleteFromCart(id: string) {
    dispatch(deleteItemFromCart(id));
  }

  return (
    <ul>
      {cartArr.map((item) => (
        <li key={item.id}>
          <Image src={item.img} alt={""} width={200} height={200} />
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.adds}</p>
          <button onClick={() => deleteFromCart(item.id)}>
            удалить ез горзенге
          </button>
        </li>
      ))}
    </ul>
  );
}
