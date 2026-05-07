import { accumlist } from "../../db/accumslist";
import Image from "next/image";
import Link from "next/link";
import CatalogActiveBtns from "../ui/catalog/CatalogActiveBtns";

export default function Catalog() {
  return (
    <>
      <h2 className="text-center p-24 text-4xl text-[#222]">
        Каталог аккумуляторов
      </h2>
      <ul className=" w-400 mx-auto grid grid-cols-5 gap-12">
        <div className="group relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          {/* Контейнер для изображения */}
          <div className="relative aspect-square bg-gray-50 overflow-hidden">
            <Image
              src={"/371_original.webp"}
              alt="Товар 1"
              width={230}
              height={600}
              className="w-full h-50 rounded-t-lg"
            />

            {/* Кнопка избранного (сердечко) */}
            <button
              className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full transition-all duration-200 hover:scale-110 hover:bg-white"
              aria-label="Добавить в избранное"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-5 h-5 text-gray-600 transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>

            {/* Бейдж "В наличии" */}
            <div className="absolute bottom-3 left-3">
              <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full font-medium">
                В наличии
              </span>
            </div>
          </div>

          {/* Информация о товаре */}
          <div className="p-4">
            <h3 className="font-medium text-gray-800 text-sm line-clamp-2 min-h-[40px]">
              Аккумулятор
            </h3>

            <div className="mt-3 flex items-center justify-between">
              {/* Цена */}
              <div>
                <span className="text-xl font-bold text-gray-900">12000 ₽</span>
              </div>

              {/* Кнопка "В корзину" */}
              <button className="relative px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:bg-gray-800 hover:shadow-md active:scale-95">
                В корзину
              </button>
            </div>
          </div>

          {/* Анимация при наведении на кнопку */}
        </div>
        {accumlist.map((accum) => (
          <li
            key={accum.id}
            className="h-full flex flex-col shadow-md rounded-lg bg-white"
          >
            <Link href={`/battery/${accum.id}`}>
              <Image
                src={accum.img}
                alt="Товар 1"
                width={230}
                height={600}
                className="w-full h-50 rounded-t-lg"
              />
            </Link>
            <CatalogActiveBtns accum={{ ...accum, amount: 0 }} />
          </li>
        ))}
      </ul>
    </>
  );
}
