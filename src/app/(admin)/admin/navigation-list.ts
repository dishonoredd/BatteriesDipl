import { routerAdmin } from "@/routes/router-admin";

type Navigation = {
  href: string;
  title: string;
  id: number;
};

const batteriesListPath = routerAdmin.BATTERIES_LIST;
const clientPath = routerAdmin.CLIENT_HOME;
const batteryAddPath = routerAdmin.BATTERY_ADD;
const usersListPath = routerAdmin.USERS_LIST;

export const navigationArr: Navigation[] = [
  { href: clientPath, title: "Клиентская страница", id: 1 },
  {
    href: batteriesListPath,
    title: "Список Аккумуляторов",
    id: 3,
  },
  {
    href: batteryAddPath,
    title: "Добавить аккумулятор",
    id: 4,
  },
  {
    href: usersListPath,
    title: "Список пользователей",
    id: 5,
  },
];
