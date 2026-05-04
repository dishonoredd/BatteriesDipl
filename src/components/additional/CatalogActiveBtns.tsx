"use client";

import { AccumType } from "@/types/AccumType";
import {
  addItemToCart,
  selectIsFavorite,
  toggleFavorite,
  useAppDispatch,
  useAppSelector,
} from "@/typescript/store";
import { useState } from "react";

type CatalogActiveBtnsProps = {
  accum: AccumType;
};

export default function CatalogActiveBtns(props: CatalogActiveBtnsProps) {
  //   const [pressed, setPressed] = useState(false);

  const pressed = useAppSelector((state) =>
    selectIsFavorite(state, props.accum.id),
  );

  const dispatch = useAppDispatch();

  function addAccToCart(accum: AccumType) {
    dispatch(addItemToCart(accum));
  }

  function togleFavourites(accum: AccumType) {
    dispatch(toggleFavorite(accum));
  }

  return (
    <div className=" rounded-b-lg w-full min-h-50 py-5 px-3 flex flex-col justify-start grow">
      <p className="text-xl min-h-17">{props.accum.name}</p>
      <button
        onClick={() => addAccToCart(props.accum)}
        className="border rounded-lg"
      >
        в корзину
      </button>
      <div className="mt-3 flex justify-between items-center">
        <p className="text-2xl">Цена: {props.accum.price} ₽</p>
        <button
          onClick={() => togleFavourites(props.accum)}
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
              stroke="black"
              strokeWidth="6"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
          {/* <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg> */}
        </button>
      </div>
    </div>
  );
}
