"use client";

import { AccumType } from "@/types/AccumType";
import Link from "next/link";
import Image from "next/image";
import {
  addItemToCart,
  removeFromFavorites,
  useAppDispatch,
  useAppSelector,
} from "@/typescript/store";
import { pathRouter } from "@/routes/router";

type FavItemP = {
  item: AccumType;
};

export default function FavoriteItem(props: FavItemP) {
  const cartItems = useAppSelector((state) => state.cartSlice.cartArr);

  const dispatch = useAppDispatch();

  const batteryPath = pathRouter.BATTERY;

  const isInCart = (itemId: string) => {
    return cartItems.some((item) => item.id === itemId);
  };

  function addToCart(acc: AccumType) {
    dispatch(addItemToCart({ ...acc, amount: 0 }));
  }

  function removeFromFav(id: string) {
    dispatch(removeFromFavorites(id));
  }

  return (
    <li
      key={props.item.id}
      className="bg-white p-5 rounded-4xl shadow-lg duration-100 hover:bg-gray-50"
    >
      <div className="duration-100 hover:text-green-500">
        <Link
          href={batteryPath + "/" + props.item.id}
          className="relative w-full h-48 block overflow-hidden rounded-2xl"
        >
          <Image
            src={props.item.img}
            alt=""
            className=" object-cover duration-300 hover:scale-106 hover:brightness-90 "
            fill
          />
        </Link>
        <Link href={batteryPath + "/" + props.item.id} className="py-5 block">
          {props.item.name}
        </Link>
      </div>
      <div className="w-fit px-4 py-1.5 bg-green-100 text-green-500 text-sm rounded-xl font-medium">
        В наличии
      </div>
      <p className="py-5 text-2xl font-bold text-gray-900">
        {props.item.price.toLocaleString("ru-RU")} ₽
      </p>

      <div className="flex gap-2">
        {isInCart(props.item.id) ? (
          <button
            className="flex-1  text-white bg-neutral-800 
                    rounded-xl duration-100 hover:bg-neutral-950"
          >
            Добавлено
          </button>
        ) : (
          <button
            onClick={() => addToCart(props.item)}
            className="flex-1  text-white bg-neutral-800 rounded-xl duration-100 hover:bg-neutral-950"
          >
            В корзину
          </button>
        )}

        <button
          onClick={() => removeFromFav(props.item.id)}
          className="h-10 w-10 flex items-center justify-center bg-gray-200 rounded-xl
                        duration-150 hover:bg-gray-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <path
              fill="#555"
              d="M13 6.333c.417 0 .833.235.833.834 0 6.666-.416 8.333-5.833 8.333s-5.834-1.667-5.834-8.333c0-.6.418-.834.834-.834zm-6.667 2.5a.834.834 0 0 0-.833.834v1.666a.834.834 0 1 0 1.666 0V9.667a.834.834 0 0 0-.833-.834m3.333 0a.834.834 0 0 0-.833.834v1.666a.834.834 0 1 0 1.667 0V9.667a.834.834 0 0 0-.834-.834M8.466.5a2.5 2.5 0 0 1 2.371 1.709l.276.826c2.266.09 3.553.406 3.553 1.527 0 .938-.416.938-1.25.938H2.583c-.833 0-1.25 0-1.25-.937 0-1.122 1.288-1.438 3.555-1.528l.274-.826A2.5 2.5 0 0 1 7.535.5zm-.931 1.667a.83.83 0 0 0-.79.57l-.09.265Q7.297 3 8 3q.706 0 1.345.002l-.089-.266a.83.83 0 0 0-.79-.569z"
            ></path>
          </svg>
        </button>
      </div>
    </li>
  );
}
