"use client";

import { AccumType } from "@/types/AccumType";
import {
  addItemToCart,
  removeFromFavorites,
  useAppDispatch,
  useAppSelector,
} from "@/typescript/store";
import Image from "next/image";
import Link from "next/link";
import { pathRouter } from "../routes/router";
import FavoriteesNoItems from "@/components/ui/favorites/FavoritesNoItems";
import { Select } from "antd";

export default function Favorites() {
  const favorites = useAppSelector((state) => state.favoritesSlice.favorites);
  const batteryPath = pathRouter.BATTERY;

  enum options {
    new = "Сначала новые",
    old = "Сначала старые",
    cheap = "Сначала дешевые",
    expensive = "Сначала дорогие",
  }

  const optionsArr = [
    options.new,
    options.old,
    options.cheap,
    options.expensive,
  ];

  const dispatch = useAppDispatch();

  function addToCart(acc: AccumType) {
    dispatch(addItemToCart({ ...acc, amount: 0 }));
  }

  function removeFromFav(id: string) {
    dispatch(removeFromFavorites(id));
  }

  return (
    <>
      {favorites.length ? (
        <>
          <div
            className="bg-white rounded-xl max-w-7xl mx-auto my-10 py-5 px-10 flex items-center
           justify-between"
          >
            <p className="text-2xl font-semibold text-gray-900">Избранное</p>

            <Select
              defaultValue={options.new}
              options={optionsArr.map((option) => {
                return { value: option };
              })}
            ></Select>
          </div>
          <ul className="grid grid-cols-4 max-w-7xl mx-auto gap-6">
            {favorites.map((item) => (
              <li key={item.id} className="bg-white p-5 rounded-2xl shadow-lg">
                <Link
                  href={batteryPath + "/" + item.id}
                  className="relative w-full h-48 block"
                >
                  <Image
                    src={item.img}
                    alt=""
                    className="rounded-lg object-cover"
                    fill
                  />
                </Link>
                <p className="py-5">{item.name}</p>
                <div className="w-fit px-4 py-1.5  bg-green-100 text-green-500 text-sm rounded-xl font-medium">
                  В наличии
                </div>
                <p className="py-5 text-2xl font-bold text-gray-900">
                  {item.price.toLocaleString("ru-RU")} ₽
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => addToCart(item)}
                    className="flex-1  text-white bg-neutral-800 rounded-xl duration-100 hover:bg-neutral-900"
                  >
                    В корзину
                  </button>
                  <button
                    onClick={() => removeFromFav(item.id)}
                    className="h-10 w-10 flex items-center justify-center bg-gray-200 rounded-xl
                        duration-150 hover:bg-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path
                        fill="#555"
                        d="M13 6.333c.417 0 .833.235.833.834 0 6.666-.416 8.333-5.833 8.333s-5.834-1.667-5.834-8.333c0-.6.418-.834.834-.834zm-6.667 2.5a.834.834 0 0 0-.833.834v1.666a.834.834 0 1 0 1.666 0V9.667a.834.834 0 0 0-.833-.834m3.333 0a.834.834 0 0 0-.833.834v1.666a.834.834 0 1 0 1.667 0V9.667a.834.834 0 0 0-.834-.834M8.466.5a2.5 2.5 0 0 1 2.371 1.709l.276.826c2.266.09 3.553.406 3.553 1.527 0 .938-.416.938-1.25.938H2.583c-.833 0-1.25 0-1.25-.937 0-1.122 1.288-1.438 3.555-1.528l.274-.826A2.5 2.5 0 0 1 7.535.5zm-.931 1.667a.83.83 0 0 0-.79.57l-.09.265Q7.297 3 8 3q.706 0 1.345.002l-.089-.266a.83.83 0 0 0-.79-.569z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <FavoriteesNoItems />
      )}
    </>
    // <ul>
    //   {favorites.map((item) => (
    //     <li key={item.id}>
    //       <Link href={batteryPath + "/" + item.id}>
    //         <Image src={item.img} alt="" width={200} height={200} />
    //         <p>{item.name}</p>
    //         <p>{item.price}</p>
    //       </Link>
    //       <button onClick={() => removeFromFav(item.id)}>
    //         Удалить из избранного
    //       </button>
    //       <button onClick={() => addToCart(item)}>Добавить в корзингу</button>
    //     </li>
    //   ))}
    // </ul>
  );
}
