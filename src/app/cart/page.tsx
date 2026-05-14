"use client";

import CartNoItems from "@/components/ui/cart/CartNoItems";
import { clearCart, useAppDispatch, useAppSelector } from "@/typescript/store";
import { useMemo } from "react";
import CartArrItem from "@/components/ui/cart/CartArrItem";

export default function Cart() {
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
      {cartArr.length ? (
        <>
          <div className="rounded-xl max-w-7xl mx-auto my-5 py-5  flex items-center justify-between">
            <p className="text-2xl font-semibold text-[#525252]">Корзина</p>

            <button
              className="text-neutral-400 hover:text-rose-500 transition-colors
           duration-200 text-lg font-medium flex items-center gap-2 group"
            >
              Перейти к оформлению
              <span className="text-xl group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </button>
          </div>
          <div className="max-w-7xl mx-auto bg-white px-16 py-10 rounded-2xl shadow-lg">
            <header className=" pb-10 flex items-center justify-between">
              <p className="text-xl text-[#333] font-semibold">
                Общая стоимость корзины: {totalPrice.toLocaleString("ru-RU")} ₽
              </p>
              <button
                onClick={() => clearAllCart()}
                className="bg-rose-100 text-rose-400 font-semibold py-2 px-8 text-lg rounded-xl duration-150
              hover:bg-red-200"
              >
                Очистить корзину
              </button>
            </header>
            <ul className="flex flex-col gap-2">
              {cartArr.map((item) => (
                <CartArrItem key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <CartNoItems />
      )}
    </>
  );
}
