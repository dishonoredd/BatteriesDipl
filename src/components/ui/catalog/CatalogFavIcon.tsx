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
      className={`absolute top-3 right-3 p-2 backdrop-blur-sm
    rounded-full transition-all duration-200 hover:scale-110
     hover:bg-white ${pressed ? "bg-red-100" : "bg-gray-100"}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
        <path
          fill={pressed ? "rgb(239, 68, 68)" : "#555"}
          d="M11.5 1.5c2.552 0 4.5 1.957 4.5 4.521 0 2.458-1.661 4.416-3.241 5.744-1.617 1.358-3.388 2.258-4.063 2.578-.443.21-.95.21-1.392 0-.675-.32-2.446-1.22-4.063-2.578C1.661 10.437 0 8.479 0 6.02 0 3.457 1.948 1.5 4.5 1.5c1.432 0 2.665.799 3.5 1.926.835-1.127 2.068-1.926 3.5-1.926"
        ></path>
      </svg>
    </button>
  );
}
