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
    <div className="bg-[#222] pb-48">
      <p className="text-4xl text-center text-white p-24">Наши преимущества</p>

      <div className=" mx-auto w-400 shadow-md bg-[#171717] p-20 flex rounded-2xl ">
        <Image
          src={"/akb.jpg"}
          alt={"img"}
          width={500}
          height={550}
          className="grow w-1/2 rounded-lg brightness-80"
        />
        <ul className="grow w-1/2 flex flex-col justify-between pl-16">
          {listItems.map((li) => (
            <li key={li} className="text-xl text-gray-300">
              {li}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
