import Image from "next/image";

const listItems: string[] = [
  "Аккумуляторы на любые авто",
  "Обмен старого на новый",
  "Цены ниже рыночных",
  "Бесплатная установка",
  "Бесплатное обслуживание",
  "Гарантия до 5 лет",
  "Аккумуляторы на любой транспорт",
];

export default function Advantages() {
  return (
    <section className="bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 pb-16 ">
        <h2 className="text-xl p-8 lg:p-16 xl:text-2xl text-white text-center">
          Наши преимущества
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <div className="lg:w-1/2 p-2">
            <Image
              src="/akb.jpg"
              alt="Автомобильный аккумулятор"
              width={600}
              height={500}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <ul className="lg:w-1/2 space-y-3">
            {listItems.map((li) => (
              <li
                key={li}
                className="flex items-center gap-3 p-3 rounded-lg duration-100 hover:bg-neutral-800"
              >
                <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-300 text-base xl:text-lg">{li}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
