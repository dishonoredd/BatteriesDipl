import Link from "next/link";
import HeaderBurgerBtn from "../ui/header/HeaderBurgerBtn";

export default function Header() {
  return (
    <header className=" shadow-md sticky top-0 z-10 bg-white">
      <nav className="w-400 mx-auto flex justify-between gap-25 p-6">
        <Link href="/" className="text-xl">
          Аккумуляторы
        </Link>
        <HeaderBurgerBtn />
      </nav>
    </header>
  );
}
