import { pathRouter } from "@/app/routes/router";
import Link from "next/link";

export default function FavoriteNoItems() {
  const homePath = pathRouter.HOME;
  const cartPath = pathRouter.CART;

  return (
    <>
      <div className="h-skeleton-battyry  pt-70 flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="58"
          height="58"
        >
          <path
            d="M50,80 L15,45 A20,20 0 1,1 50,30 A20,20 0 1,1 85,45 Z"
            fill="transparent"
            stroke="rgb(156, 163, 175)"
            strokeWidth="8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>

        <p className="text-2xl text-gray-400 mb-2">
          В избранном пока нет товаров
        </p>
        <p className="text-gray-400 text-base">
          Но это никогда не поздно исправить!
        </p>

        <div className="max-w-md mx-auto mt-12">
          <div className="flex gap-4 justify-center">
            <Link
              href={homePath}
              className="text-neutral-400 hover:text-rose-500 transition-colors duration-200 text-lg font-medium flex items-center gap-2 group"
            >
              В каталог
            </Link>
            <Link
              href={cartPath}
              className="text-neutral-400 hover:text-rose-500 transition-colors duration-200 text-lg font-medium flex items-center gap-2 group"
            >
              Корзина
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
