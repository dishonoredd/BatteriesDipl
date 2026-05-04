import Image from "next/image";

export default function Advantages() {
  return (
    <div className="my-30 mx-auto w-400 shadow-md bg-white p-20 flex rounded-2xl ">
      <Image
        src={"/akb.jpg"}
        alt={""}
        width={5000}
        height={550}
        className="grow w-1/2"
      />
      <ul className="grow w-1/2 flex flex-col justify-between pl-16">
        <li className="text-4xl">Наши преимущества</li>
        <li className="text-xl">Аккумуляторы на любые авто</li>
        <li className="text-xl">Обмен строго на новый</li>
        <li className="text-xl">
          Скидка на сдачу старого аккумулятора до 4000 рублей
        </li>
        <li className="text-xl">Цены ниже рыночных</li>
        <li className="text-xl">Бесплатная установка</li>
        <li className="text-xl">Бесплатное обслуживание</li>
        <li className="text-xl">Гарантия до 5 лет</li>
      </ul>
    </div>
  );
}
