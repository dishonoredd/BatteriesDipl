import { pathRouter } from "@/routes/router";
import Link from "next/link";

export default function NoBattery() {
  const HOME = pathRouter.HOME;

  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center flex-col gap-20">
      <h2 className="text-gray-500 text-lg">
        Аккумулятор не найден или был удален
      </h2>
      <Link href={HOME} className="text-gray-500 hover:text-neutral-900">
        Вернуться к списку
      </Link>
    </div>
  );
}
