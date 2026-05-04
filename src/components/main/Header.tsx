import Link from "next/link";
import HeaderBurgerBtn from "../ui/HeaderBurgerBtn";

export default function Header() {
  return (
    <header className=" shadow-md sticky top-0 z-10 bg-white">
      <nav className="w-400 mx-auto flex justify-center gap-25 p-6">
        <Link href="/" className="text-xl">
          Аккумуляторы
        </Link>
        <a href="" className="text-xl">
          О компании
        </a>
        <a href="" className="text-xl">
          Контакты
        </a>
        <Link href="/cart">Корзина</Link>
        <Link href="/favorites">Избран7ные</Link>

        <HeaderBurgerBtn />
      </nav>
    </header>
  );
}
