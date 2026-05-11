"use client";

import { AccumType } from "@/types/AccumType";
import {
  selectIsFavorite,
  toggleFavorite,
  useAppDispatch,
  useAppSelector,
} from "@/typescript/store";

type FavP = {
  acc: AccumType;
};

export default function CatalogFavIcon(props: FavP) {
  const pressed = useAppSelector((state) =>
    selectIsFavorite(state, props.acc.id),
  );

  const dispatch = useAppDispatch();

  function togleFavourites(accum: AccumType) {
    dispatch(toggleFavorite(accum));
  }

  return (
    <button
      onClick={() => togleFavourites(props.acc)}
      className={`absolute top-3 right-3 p-2   backdrop-blur-sm
    rounded-full transition-all duration-200 hover:scale-110 hover:bg-white ${pressed ? "bg-red-100" : "bg-white/80"}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={pressed ? "rgb(239, 68, 68)" : "none"}
        stroke={pressed ? "rgb(239, 68, 68)" : "currentColor"}
        strokeWidth="1.5"
        className="w-5 h-5 text-gray-600 transition-colors"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </button>
  );
}
