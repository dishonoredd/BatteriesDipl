import { pathRouter } from "@/routes/router";
import Link from "next/link";

export default function NoBattery() {
  const CATALOG = pathRouter.CATALOG_SELECTION;

  return (
    <section className="min-h-[calc(100vh-100px)] flex items-center justify-center flex-col gap-20">
      <h2 className="text-gray-500 text-lg">
        Аккумулятор не найден или был удален
      </h2>
      <Link href={CATALOG} className="text-gray-500 hover:text-neutral-900">
        Вернуться к списку
      </Link>
    </section>
  );
}
