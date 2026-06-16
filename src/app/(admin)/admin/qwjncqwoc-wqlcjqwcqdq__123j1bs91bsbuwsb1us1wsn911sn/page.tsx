import Link from "next/link";
import { navigationArr } from "./navigation-list";

export default function AdminPanel() {
  return (
    <div className="min-h-[calc(100vh-76px)] flex items-center justify-center flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 px-4 sm:px-6 py-8 sm:py-12">
      <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-800 bg-linear-to-r from-gray-700 to-gray-900 bg-clip-text ">
        Админ-панель
      </p>

      <ul className="max-w-3xl w-full mx-auto flex items-center justify-between gap-10">
        {navigationArr.map((el) => (
          <li
            key={el.id}
            className="group relative overflow-hidden rounded-2xl shadow-lg bg-white 
                       duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <Link
              href={el.href}
              className="relative flex items-center justify-center text-center
                         text-base sm:text-lg md:text-xl font-semibold
                         text-gray-700 group-hover:text-gray-900
                         w-full h-full min-h-25 sm:min-h-30 md:min-h-35
                         px-4 py-6 sm:py-8
                         transition-all duration-300"
            >
              <span className="relative z-10">{el.title}</span>

              <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
