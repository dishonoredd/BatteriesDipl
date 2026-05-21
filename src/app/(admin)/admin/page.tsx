import Link from "next/link";
import { navigationArr } from "./navigation-list";

export default function AdminPanel() {
  return (
    <div className="min-h-[calc(100vh-76px)] flex items-center justify-center flex-col gap-20">
      <p className="font-semibold text-2xl">Админ-панель</p>
      <ul className="max-w-400 w-6xl min-h-100 mx-auto grid grid-cols-2 gap-10">
        {navigationArr.map((el) => (
          <li
            key={el.id}
            className=" gap-10  rounded-2xl  shadow-lg bg-gray-50
            duration-150 hover:bg-gray-100 hover:shadow-xl"
          >
            <Link
              href={el.href}
              className="text-neutral-900 flex items-center justify-center text-xl w-full h-full"
            >
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
