"use client";

import { AccumType } from "@/types/AccumType";
import {
  addItemToCart,
  selectIsFavorite,
  toggleFavorite,
  useAppDispatch,
  useAppSelector,
} from "@/typescript/redux/store";

type BatteryBtnsP = {
  battery: AccumType;
};

export default function BatteryBtns(props: BatteryBtnsP) {
  const cartItems = useAppSelector((state) => state.cartSlice.cartArr);

  const pressed = useAppSelector((state) =>
    selectIsFavorite(state, props.battery.id),
  );

  const isInCart = (itemId: string) => {
    return cartItems.some((item) => item.id === itemId);
  };
  const dispatch = useAppDispatch();

  function togleFavourites(accum: AccumType) {
    dispatch(toggleFavorite(accum));
  }

  function addToCart(acc: AccumType) {
    dispatch(addItemToCart({ ...acc, amount: 0 }));
  }

  return (
    <div className="flex gap-3 mb-8">
      {isInCart(props.battery.id) ? (
        <button className="flex-1 bg-gray-300 text-neutral-800 py-3 rounded-xl font-semibold hover:bg-gray-500 transition">
          Товар в корзине
        </button>
      ) : (
        <button
          onClick={() => addToCart(props.battery)}
          className="flex-1 bg-gray-800 text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition"
        >
          Добавить в корзину
        </button>
      )}

      <button
        onClick={() => togleFavourites(props.battery)}
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${pressed ? "bg-red-50 hover:bg-red-100" : "bg-gray-200 hover:bg-gray-300"} transition`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
          <path
            fill={pressed ? "rgb(239, 68, 68)" : "#555"}
            d="M11.5 1.5c2.552 0 4.5 1.957 4.5 4.521 0 2.458-1.661 4.416-3.241 5.744-1.617 1.358-3.388 2.258-4.063 2.578-.443.21-.95.21-1.392 0-.675-.32-2.446-1.22-4.063-2.578C1.661 10.437 0 8.479 0 6.02 0 3.457 1.948 1.5 4.5 1.5c1.432 0 2.665.799 3.5 1.926.835-1.127 2.068-1.926 3.5-1.926"
          ></path>
        </svg>
      </button>
    </div>
  );
}
