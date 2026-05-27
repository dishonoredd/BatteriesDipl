"use client";

import { pathRouter } from "@/routes/router";
import Link from "next/link";

type BatteryNavigationP = {
  name: string;
};

function goBack() {
  window.history.back();
}

const CART = pathRouter.CART;
const FAVS = pathRouter.FAVORITES;

export default function BatteryNavigation(props: BatteryNavigationP) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-500 my-7">
      <button onClick={() => goBack()} className="hover:text-gray-700">
        Назад
      </button>
      <span>/</span>
      <Link href={CART} className="hover:text-gray-700">
        Корзина
      </Link>
      <span>/</span>
      <Link href={FAVS} className="hover:text-gray-700">
        Избранное
      </Link>
      <span>/</span>
      <span className="text-gray-800">{props.name}</span>
    </div>
  );
}
