"use client";

import CartNoItems from "@/components/ui/adds/CartNoItems";
import CartActiveBtns from "@/components/ui/cart/CartActiveBtns";
import CatalogCounter from "@/components/ui/catalog/CatalogCounter";
import { clearCart, useAppDispatch, useAppSelector } from "@/typescript/store";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { pathRouter } from "../routes/router";

export default function Cart() {
  const baterryPath = pathRouter.BATTERY;

  const cartArr = useAppSelector((state) => state.cartSlice.cartArr);

  const dispatch = useAppDispatch();

  function clearAllCart() {
    if (!cartArr.length) return;

    const isConfirmed = confirm("Вы уверены что хотите очистить карзину?");
    if (isConfirmed) {
      dispatch(clearCart());
    } else return;
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
      <div className="bg-white rounded-xl w-400 mx-auto my-10 py-5 px-10 flex items-center justify-between">
        <p className="text-2xl font-semibold text-[#525252]">Корзина</p>
        <button
          onClick={() => clearAllCart()}
          className="bg-rose-100 text-rose-400 font-semibold py-2 px-8 text-lg rounded-xl duration-150
             hover:bg-red-200"
        >
          Очистить корзину
        </button>
      </div>
      {cartArr.length ? (
        <div className="w-400 mx-auto bg-white p-10 rounded-2xl">
          <header className=" pb-10 flex items-center justify-between">
            <p className="text-xl text-[#333] font-semibold">
              Общая сумма корзины: {totalPrice}
            </p>
            <button
              className="bg-[#333] text-white py-2 px-8 text-lg rounded-xl duration-100
             hover:bg-[#222]"
            >
              Перейти к оформлению
            </button>
          </header>
          <ul className="flex flex-col gap-2">
            {cartArr.map((item) => (
              <li
                key={item.id}
                className="flex p-4 rounded-2xl duration-100 hover:bg-neutral-100 "
              >
                <Image
                  src={item.img}
                  alt={"img"}
                  width={200}
                  height={200}
                  className="rounded-xl"
                />
                <div className="flex flex-col w-3/5">
                  <div className="flex flex-col justify-between h-full ml-3">
                    <div className="w-fit px-4 py-1.5  bg-green-100 text-green-500 text-sm rounded-xl font-medium">
                      В наличии
                    </div>
                    <p className="text-[#333] text-lg">{item.name}</p>

                    <CartActiveBtns acc={item} />
                  </div>
                </div>
                <div className="w-1/5">
                  <p className="text-rose-400 text-lg font-bold">
                    {item.price} ₽
                  </p>
                  <p className="text-neutral-500 text-md font-semibold">
                    за шт.
                  </p>
                </div>
                <div className="w-1/5 flex items-start justify-end">
                  <div className="flex flex-col items-end justify-between h-full w-40">
                    <CatalogCounter amount={item.amount} acc={item} />
                    <Link
                      href={baterryPath + "/" + item.id}
                      className="text-white bg-neutral-700 px-4 py-1 rounded-xl hover:bg-neutral-800"
                    >
                      Подробнее
                    </Link>
                  </div>
                </div>
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
