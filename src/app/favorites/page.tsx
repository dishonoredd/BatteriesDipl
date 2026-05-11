"use client";

import { AccumType } from "@/types/AccumType";
import { CartItem } from "@/types/CartItemType";
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

export default function Favorites() {
  const favorites = useAppSelector((state) => state.favoritesSlice.favorites);
  const batteryPath = pathRouter.BATTERY;

  const dispatch = useAppDispatch();

  function addToCart(acc: AccumType) {
    dispatch(addItemToCart({ ...acc, amount: 0 }));
  }

  function removeFromFav(id: string) {
    dispatch(removeFromFavorites(id));
  }

  return (
    <>
      <div className="bg-white rounded-xl w-400 mx-auto my-10 py-5 px-10 flex items-center justify-between">
        <p className="text-2xl font-semibold text-[#525252]">Корзина</p>
        <select
          className="px-4 py-2 bg-white border-2 border-neutral-300
         rounded-lg focus:outline-none focus:border-gray-400  "
        >
          <option>Сначала дешевые</option>
          <option>Сначала дорогие</option>
          <option>Сначала старые</option>
          <option>Сначала новые</option>
        </select>
      </div>
      {favorites.length ? (
        <ul>
          {favorites.map((item) => (
            <li key={item.id}>
              <Link href={batteryPath + "/" + item.id}>
                <Image src={item.img} alt="" width={200} height={200} />
                <p>{item.name}</p>
                <p>{item.price}</p>
              </Link>
              <button onClick={() => removeFromFav(item.id)}>
                Удалить из избранного
              </button>
              <button onClick={() => addToCart(item)}>
                Добавить в корзингу
              </button>
            </li>
          ))}
        </ul>
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
