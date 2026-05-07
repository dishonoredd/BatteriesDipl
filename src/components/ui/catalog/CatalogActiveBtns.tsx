"use client";

import { AccumType } from "@/types/AccumType";
import {
  selectIsFavorite,
  toggleFavorite,
  useAppDispatch,
  useAppSelector,
} from "@/typescript/store";
import CatalogProductBtn from "./CatalogProductBtn";
import CatalogCounter from "./CatalogCounter";
import { CartItem } from "@/types/CartItemType";

type CatalogActiveBtnsProps = {
  accum: CartItem;
};

export default function CatalogActiveBtns(props: CatalogActiveBtnsProps) {
  const dispatch = useAppDispatch();

  const pressed = useAppSelector((state) =>
    selectIsFavorite(state, props.accum.id),
  );

  const itemAmount = useAppSelector((state) => {
    const item = state.cartSlice.cartArr.find(
      (item) => item.id === props.accum.id,
    );
    return item?.amount || 0;
  });

  function togleFavourites(accum: AccumType) {
    dispatch(toggleFavorite(accum));
  }

  return (
    <div className=" rounded-b-lg w-full min-h-50 py-5 px-3 flex flex-col justify-start grow">
      <p className="text-xl min-h-17">{props.accum.name}</p>
      {itemAmount ? (
        <CatalogCounter amount={itemAmount} acc={props.accum} />
      ) : (
        <CatalogProductBtn acc={props.accum} />
      )}
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
        </button>
      </div>
    </div>
  );
}
