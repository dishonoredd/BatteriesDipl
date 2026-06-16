import { pathRouter } from "@/routes/router";
import Link from "next/link";

export default function FindBattery() {
  const SELECTION_PATH = pathRouter.CATALOG_SELECTION;

  return (
    <section className="max-w-400 mx-auto py-16 px-4 sm:px-6 md:px-8">
      <div className="bg-white rounded-2xl shadow-md p-12 text-center">
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 mx-auto text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </svg>
        </div>

        <h2 className="font-semibold text-2xl text-[#222] mb-3">
          Подбор аккумулятора по параметрам
        </h2>

        <p className="text-gray-500 mb-8">
          Выберите характеристики нужного акуумулятора, и мы подберем подходящий
        </p>

        <Link
          href={SELECTION_PATH}
          className="max-sm:text-7px sm:text-lg inline-flex items-center justify-center px-8 py-3 bg-gray-800 text-white  rounded-xl hover:bg-gray-900 transition duration-200 shadow-md hover:shadow-lg gap-2"
        >
          <span>Подобрать аккумулятор</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
