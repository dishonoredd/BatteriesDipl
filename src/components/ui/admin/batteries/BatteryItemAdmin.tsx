import Link from "next/link";
import Image from "next/image";
import { AccumType } from "@/types/AccumType";
import { routerAdmin } from "@/routes/router-admin";

type BatteryItemAdminP = {
  battery: AccumType;
};

export default function BatteryItemAdmin(props: BatteryItemAdminP) {
  const batteryIdPath = routerAdmin.BATTERY_ID_ADMIN;

  return (
    <li
      key={props.battery.id}
      className="bg-white shadow rounded-lg duration-100 hover:shadow-lg hover:bg-gray-50 "
    >
      <Link href={batteryIdPath + props.battery.id}>
        <div className="relative w-full h-35 shrink-0 rounded-lg overflow-hidden">
          <Image
            src={props.battery.img}
            alt={props.battery.name}
            fill
            className="object-cover"
            sizes="184px"
          />
        </div>
        <p className="px-2 pt-1 font-semibold">{props.battery.id}</p>
        <p className="p-2">{props.battery.name}</p>
        <p className="p-2 font-semibold">{props.battery.price} ₽</p>
      </Link>
    </li>
  );
}
