import Image from "next/image";

const listItems: string[] = [
  "Аккумуляторы на любые авто",
  "Обмен строго на новый",
  "Скидка на сдачу старого аккумулятора до 4000 рублей",
  "Цены ниже рыночных",
  "Бесплатная установка",
  "Бесплатное обслуживание",
  "Гарантия до 5 лет",
];

export default function Advantages() {
  return (
    <section className="relative bg-linear-to-br from-[#0a0a0a] via-[#0c0c0c] to-[#0f0f0f]">
      <div
        className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] 
      bg-size-[32px_32px] opacity-20"
      />

      <div className="relative max-w-7xl mx-auto px-4 py-24 lg:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-4">
            Наши преимущества
          </h2>
        </div>

        <div
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-linear-to-br
         from-[#101010] to-[#0a0a0a] rounded-3xl p-6 lg:p-10 border border-white/5"
        >
          <div className="relative lg:w-1/2 overflow-hidden rounded-2xl group h-fit">
            <Image
              src="/akb.jpg"
              alt="Автомобильный аккумулятор"
              width={600}
              height={500}
              className="w-full h-auto object-cover rounded-2xl 
              transition-transform brightness-70 duration-500 hover:scale-105"
            />
          </div>

          <ul className="lg:w-1/2 space-y-4">
            {listItems.map((li) => (
              <li
                key={li}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div
                  className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center
                 justify-center shrink-0 mt-0.5"
                >
                  <svg
                    className="w-3.5 h-3.5 text-emerald-500"
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
                <span className="text-gray-300 hover:text-white transition-colors text-base lg:text-lg">
                  {li}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
