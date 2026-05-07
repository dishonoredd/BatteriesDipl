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
      className="text-xl  p-3 "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="30"
        height="30"
      >
        <path
          d="M50,80 L15,45 A20,20 0 1,1 50,30 A20,20 0 1,1 85,45 Z"
          fill={pressed ? "rgb(255, 60, 60)" : "white"}
          stroke={pressed ? "rgb(255, 60, 60)" : "black"}
          strokeWidth={pressed ? "8" : "5"}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
