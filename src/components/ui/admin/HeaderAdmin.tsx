import { pathRouter } from "@/routes/router";
import Link from "next/link";

const homePath = pathRouter.HOME;

export default function HeaderAdmin() {
  return (
    <header className=" shadow-md sticky top-0 z-10 bg-white">
      <div className="max-w-400 mx-auto flex justify-between gap-25 py-6">
        <Link href={homePath} className="text-xl">
          На главную страницу
        </Link>
      </div>
    </header>
  );
}
