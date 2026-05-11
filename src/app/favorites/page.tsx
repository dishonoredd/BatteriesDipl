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
import FavoriteesNoItems from "@/components/ui/adds/FavoritesNoItems";

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
