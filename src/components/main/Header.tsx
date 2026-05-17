import Link from "next/link";
import HeaderBurgerBtn from "../ui/header/HeaderBurgerBtn";
import { pathRouter } from "@/routes/router";

const homePath = pathRouter.HOME;

export default function Header() {
  return (
    <header className=" shadow-md sticky top-0 z-10 bg-white">
      <div className="max-w-400 mx-auto flex justify-between gap-25 py-6">
        <HeaderBurgerBtn />

        <Link href={homePath} className="text-xl">
          Аккумуляторы
        </Link>
      </div>
    </header>
  );
}
