import Link from "next/link";
import HeaderBurgerBtn from "../ui/header/HeaderBurgerBtn";
import { pathRouter } from "@/routes/router";

const homePath = pathRouter.HOME;

export default function Header() {
  return (
    <header className="shadow-md sticky top-0 z-10 bg-white">
      <div className="max-w-400 mx-auto flex items-center justify-between gap-4 sm:gap-25 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6">
        <HeaderBurgerBtn />

        <Link
          href={homePath}
          className="text-base sm:text-sm md:text-lg text-neutral-700 hover:text-neutral-800"
        >
          Аккумуляторы
        </Link>
      </div>
    </header>
  );
}
