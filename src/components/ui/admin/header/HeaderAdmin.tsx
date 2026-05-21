import { pathRouter } from "@/routes/router";
import Link from "next/link";
import HeaderBurgerBtnAdmin from "./HeaderBurgerBtnAdmin";

const homePath = pathRouter.HOME;

export default function HeaderAdmin() {
  return (
    <header className=" shadow-md sticky top-0 z-10 bg-white">
      <div className="max-w-400 mx-auto flex justify-between gap-25 py-6">
        <HeaderBurgerBtnAdmin />
        <Link href={homePath} className="text-xl">
          На главную страницу
        </Link>
      </div>
    </header>
  );
}
