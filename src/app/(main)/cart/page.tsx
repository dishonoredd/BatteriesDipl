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

    const isConfirmed = confirm("Вы уверены что хотите очистить корзину?");
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

  return (
    <div className="min-h-screen bg-gray-50 px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      {cartArr.length ? (
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mb-4 sm:mb-6 md:mb-8">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#222]">
              Корзина
            </p>

            <button
              className="w-full sm:w-auto bg-rose-500 hover:bg-rose-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl 
              text-sm sm:text-base font-medium flex items-center justify-center gap-2 group shadow-md hover:shadow-lg transition-all duration-200"
            >
              Перейти к оформлению
              <span className="text-base sm:text-xl group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 p-4 sm:p-6 md:p-8 border-b border-gray-200">
              <p className="text-base sm:text-lg md:text-xl text-[#333] font-semibold text-center sm:text-left">
                Общая стоимость: {totalPrice.toLocaleString("ru-RU")} ₽
              </p>

              <button
                onClick={() => clearAllCart()}
                className="w-full sm:w-auto bg-rose-50 hover:bg-rose-100 text-rose-500 
                font-semibold py-2 px-4 sm:px-6 text-sm sm:text-base rounded-xl duration-200
                transition-colors border border-rose-200 hover:border-rose-300"
              >
                Очистить корзину
              </button>
            </div>

            <ul className="divide-y divide-gray-100">
              {cartArr.map((item) => (
                <CartArrItem key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <CartNoItems />
      )}
    </div>
  );
}
