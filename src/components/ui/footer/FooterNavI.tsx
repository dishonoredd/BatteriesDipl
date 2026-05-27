import { pathRouter } from "@/routes/router";
import Link from "next/link";

const footerNavigation = [
  { name: "Главная", href: pathRouter.HOME },
  { name: "Каталог", href: pathRouter.CATALOG_SELECTION },
  { name: "Избранное", href: pathRouter.FAVORITES },
  { name: "Корзина", href: pathRouter.CART },
];

export default function FooterNav() {
  return (
    <ul className="space-y-2">
      {footerNavigation.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className="text-gray-400 hover:text-white transition text-sm"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
