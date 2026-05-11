"use client";

import CartNoItems from "@/components/ui/adds/CartNoItems";
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
    <>
      <div className="font-semibold text-3xl w-400 mx-auto py-10 text-[#525252]">
        Корзина
      </div>
      {cartArr.length ? (
        <div className="w-400 mx-auto bg-white p-10 rounded-2xl">
          <p className="text-xl text-[#333] font-semibold pb-10">
            Общая сумма корзины: {totalPrice}
          </p>
          <ul className="flex flex-col gap-10">
            {cartArr.map((item) => (
              <li key={item.id} className="flex">
                <Image
                  src={item.img}
                  alt={"img"}
                  width={200}
                  height={200}
                  className="rounded-xl"
                />
                <div>
                  <p className="tezxt-[#333] text-lg">{item.name}</p>
                  <span className="px-4 py-2 bg-green-100 text-green-500 text-sm rounded-xl font-medium">
                    В наличии
                  </span>
                </div>
                <div>
                  <p className="tezxt-[#333] text-lg">{item.price}</p>
                  <p>за шт.</p>
                </div>
                <div className="w-40">
                  <CatalogCounter amount={item.amount} acc={item} />
                </div>
                <button onClick={() => deleteFromCart(item.id)}>
                  удалить ез горзенге
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <CartNoItems />
      )}
    </>
  );
}
