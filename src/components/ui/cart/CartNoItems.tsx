import { pathRouter } from "@/app/routes/router";
import Link from "next/link";

export default function CartNoItems() {
  const homePath = pathRouter.HOME;
  const favoritesPath = pathRouter.FAVORITES;

  return (
    <>
      <div className="h-skeleton-battyry  pt-70 flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="58"
          height="58"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgb(156, 163, 175)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        <p className="text-2xl text-gray-400 mb-2">Ваша корзина пуста</p>
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
              href={favoritesPath}
              className="text-neutral-400 hover:text-rose-500 transition-colors duration-200 text-lg font-medium flex items-center gap-2 group"
            >
              Избранное
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
