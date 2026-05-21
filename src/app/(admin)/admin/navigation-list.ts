import { routerAdmin } from "@/routes/router-admin";

type Navigation = {
  href: string;
  title: string;
  id: string;
};

const batteriesListPath = routerAdmin.BATTERIES_LIST;
const homePath = routerAdmin.CLIENT_HOME;
const batteryAddPath = routerAdmin.BATTERY_ADD;
const usersListPath = routerAdmin.USERS_LIST;

export const navigationArr: Navigation[] = [
  { href: homePath, title: "Клиентская страница", id: crypto.randomUUID() },
  {
    href: batteriesListPath,
    title: "Список Аккумуляторов",
    id: crypto.randomUUID(),
  },
  {
    href: batteryAddPath,
    title: "Добавить аккумулятор",
    id: crypto.randomUUID(),
  },
  {
    href: usersListPath,
    title: "Список пользователей",
    id: crypto.randomUUID(),
  },
];
