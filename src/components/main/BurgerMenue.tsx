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
      <div className="bg-[#222] w-1/3 border-r border-r-[#393939] flex items-center justify-center relative">
        <div
          onClick={() => dispatch(switchOpen(false))}
          className="cross absolute top-5 right-9"
        ></div>
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
