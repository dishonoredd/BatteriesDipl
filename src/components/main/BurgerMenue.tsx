"use client";

import { pathRouter } from "@/app/routes/router";
import { switchOpen, useAppDispatch, useAppSelector } from "@/typescript/store";
import Link from "next/link";

type Navigation = {
  href: string;
  title: string;
  id: string;
};

const homePath = pathRouter.HOME;
const cartPath = pathRouter.CART;
const favPath = pathRouter.FAVORITES;

const navigationArr: Navigation[] = [
  { href: homePath, title: "О компанииы", id: crypto.randomUUID() },
  { href: homePath, title: "Контакты", id: crypto.randomUUID() },
  { href: cartPath, title: "Корзина", id: crypto.randomUUID() },
  { href: favPath, title: "Избранное", id: crypto.randomUUID() },
];

export default function BurgerMenue() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.burgerSlice.isOpened);

  return (
    <div
      className={`w-full h-screen flex -translate-x-full fixed top-0 z-10
        transition duration-400 ${isOpen ? "translate-x-0" : ""}`}
    >
      <div className="bg-[#0c0c0c] w-1/3 border-r border-r-[#393939] flex items-center justify-center relative">
        <button
          onClick={() => dispatch(switchOpen(false))}
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
                onClick={() => dispatch(switchOpen(false))}
                href={item.href}
                className="text-white text-2xl"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={() => dispatch(switchOpen(false))}
        className="bg-transparent grow"
      ></div>
    </div>
  );
}
