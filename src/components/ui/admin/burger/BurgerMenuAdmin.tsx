"use client";

import { routerAdmin } from "@/routes/router-admin";
import {
  switchOpenAdmin,
  useAppDispatch,
  useAppSelector,
} from "@/typescript/redux/store";
import Link from "next/link";

type Navigation = {
  href: string;
  title: string;
  id: number;
};

const clientPath = routerAdmin.CLIENT_HOME;
const batteriesListPath = routerAdmin.BATTERIES_LIST;
const homePath = routerAdmin.HOME_PAGE;
const batteryAddPath = routerAdmin.BATTERY_ADD;
const usersListPath = routerAdmin.USERS_LIST;

const navigationArr: Navigation[] = [
  { href: clientPath, title: "Клиентская страница", id: 1 },
  { href: homePath, title: "Домашняя страница", id: 2 },
  {
    href: batteriesListPath,
    title: "Список Аккумуляторов",
    id: 3,
  },
  {
    href: batteryAddPath,
    title: "Добавить аккумулятор",
    id: 4,
  },
  {
    href: usersListPath,
    title: "Список пользователей",
    id: 5,
  },
];

export default function BurgerMenueAdmin() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.burgerSlice.isOpenAdmin);

  function switchState(val: boolean) {
    dispatch(switchOpenAdmin(val));
  }

  return (
    <div
      className={`w-full h-screen flex -translate-x-full fixed top-0 z-10
        transition duration-400 ${isOpen ? "translate-x-0" : ""}`}
    >
      <div className="bg-neutral-900 w-1/3 border-r border-r-[#222] flex items-center justify-center relative">
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
