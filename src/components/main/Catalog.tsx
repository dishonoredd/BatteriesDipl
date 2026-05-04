import { accumlist } from "../../db/accumslist";
import Image from "next/image";

export default function Catalog() {
  return (
    <>
      <h2 className="text-center p-24 text-4xl ">Каталог аккумуляторов</h2>
      <ul className="w-400 mx-auto grid grid-cols-5 gap-12">
        {accumlist.map((accum) => (
          <li
            key={accum.id}
            className="h-full flex flex-col shadow-md rounded-lg bg-white"
          >
            <Image
              src={accum.img}
              alt="Товар 1"
              width={230}
              height={600}
              className="w-full h-50 rounded-t-lg"
            />
            <div className=" rounded-b-lg w-full min-h-50 py-5 px-3 flex flex-col justify-start grow">
              <p className="text-xl min-h-17">{accum.name}</p>
              {/* <p className="text-xl min-h-17">{accum.adds}</p> */}
              <button className="border rounded-lg">в корзину</button>
              <div className="mt-3 flex justify-between items-center">
                <p className="text-2xl">Цена: {accum.price} ₽</p>

                <button className="text-xl  p-3 ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
