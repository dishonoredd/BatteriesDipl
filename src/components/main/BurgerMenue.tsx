"use client";

import { pathRouter } from "@/routes/router";
import { switchOpen, useAppDispatch, useAppSelector } from "@/typescript/store";
import Link from "next/link";

type Navigation = {
  href: string;
  title: string;
  id: number;
};

const catalogPath = pathRouter.CATALOG_SELECTION;
const cartPath = pathRouter.CART;
const favPath = pathRouter.FAVORITES;
const regPath = pathRouter.REGISTRATION;
const loginPath = pathRouter.LOGIN;

const navigationArr: Navigation[] = [
  { href: catalogPath, title: "Каталог", id: 1 },
  { href: cartPath, title: "Корзина", id: 2 },
  { href: favPath, title: "Избранное", id: 3 },
  { href: loginPath, title: "Вход", id: 4 },
  { href: regPath, title: "Регестрация", id: 5 },
];

export default function BurgerMenue() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.burgerSlice.isOpened);

  function switchState(val: boolean) {
    dispatch(switchOpen(val));
  }

  return (
    <div
      className={`w-full h-screen flex -translate-x-full fixed top-0 z-10
        transition duration-400 ${isOpen ? "translate-x-0" : ""}`}
    >
      <div className="bg-neutral-900 max-sm:w-9/10 sm:w-6/10 lg:w-1/3  border-r border-r-[#222] flex items-center justify-center relative">
        <button
          onClick={() => switchState(false)}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors group"
          aria-label="Закрыть меню"
        >
          <svg
            className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col gap-6">
          {navigationArr.map((item) => (
            <li key={item.id}>
              <Link
                onClick={() => switchState(false)}
                href={item.href}
                className="text-white text-xl"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={() => switchState(false)}
        className="bg-transparent grow"
      ></div>
    </div>
  );
}
