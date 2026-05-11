"use client";

import { AccumType } from "@/types/AccumType";
import {
  deleteItemFromCartFinally,
  selectIsFavorite,
  toggleFavorite,
  useAppDispatch,
  useAppSelector,
} from "@/typescript/store";

type CartBProps = {
  acc: AccumType;
};

export default function CartActiveBtns(props: CartBProps) {
  const dispatch = useAppDispatch();

  const pressed = useAppSelector((state) =>
    selectIsFavorite(state, props.acc.id),
  );

  function togleFavourites(accum: AccumType) {
    dispatch(toggleFavorite(accum));
  }

  function deleteFromCart(id: string) {
    const isComfirmed = confirm("Вы уверены что хотите удалить товар?");
    if (isComfirmed) {
      dispatch(deleteItemFromCartFinally(id));
    } else return;
  }

  return (
    <div className="flex gap-1">
      <button
        onClick={() => togleFavourites(props.acc)}
        className={`${pressed ? "bg-red-100 hover:bg-red-100" : "bg-gray-200 hover:bg-gray-300"} h-9 w-9 flex items-center justify-center  rounded-xl
        duration-150 `}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
          <path
            fill={pressed ? "rgb(239, 68, 68)" : "#555"}
            d="M11.5 1.5c2.552 0 4.5 1.957 4.5 4.521 0 2.458-1.661 4.416-3.241 5.744-1.617 1.358-3.388 2.258-4.063 2.578-.443.21-.95.21-1.392 0-.675-.32-2.446-1.22-4.063-2.578C1.661 10.437 0 8.479 0 6.02 0 3.457 1.948 1.5 4.5 1.5c1.432 0 2.665.799 3.5 1.926.835-1.127 2.068-1.926 3.5-1.926"
          ></path>
        </svg>
      </button>
      <button
        onClick={() => deleteFromCart(props.acc.id)}
        className="h-9 w-9 flex items-center justify-center bg-gray-200 rounded-xl
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
  );
}
