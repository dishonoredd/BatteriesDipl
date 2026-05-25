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
      className="bg-white shadow-md rounded-xl overflow-hidden 
                 duration-200 hover:shadow-xl hover:-translate-y-0.5 
                 transition-all h-full flex flex-col"
    >
      <Link
        href={batteryIdPath + props.battery.id}
        className="h-full flex flex-col"
      >
        <div className="p-3 pb-2 border-b border-gray-100">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <p className="font-bold text-sm text-gray-700 truncate">
              {props.battery.brand}
            </p>
          </div>
        </div>

        <div className="relative w-full pt-[100%] bg-gray-50 overflow-hidden">
          <Image
            src={props.battery.img}
            alt={props.battery.name}
            fill
            className="object-cover p-2 transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
          />
        </div>

        <div className="p-3 pb-2">
          <p className="text-sm font-medium text-gray-800 line-clamp-2 min-h-10">
            {props.battery.name}
          </p>
          <p className="text-[8px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
            ID: {props.battery.id}
          </p>
        </div>

        <div className="px-3 pb-2">
          <div className="grid grid-cols-2 gap-1.5">
            <div className="bg-gray-50 rounded-lg px-2 py-1.5 text-center">
              <p className="text-sm font-semibold text-gray-700">
                {props.battery.capacity} Ач
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg px-2 py-1.5 text-center">
              <p className="text-sm font-semibold text-gray-700">
                {props.battery.voltage} В
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg px-2 py-1.5 text-center">
              <p className="text-xs font-medium text-gray-700 truncate">
                {props.battery.polarity}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg px-2 py-1.5 text-center">
              <p className="text-xs font-medium text-gray-700">
                {props.battery.standart}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg px-2 py-1.5 text-center">
              <p className="text-xs font-semibold text-gray-700">
                {props.battery.technology}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg px-2 py-1.5 text-center">
              <p className="text-xs font-medium text-gray-700">
                {props.battery.sizeType}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-auto p-3 pt-2 border-t border-gray-100">
          <div className="flex items-baseline justify-between gap-2 flex-wrap">
            <p className="text-lg font-bold text-gray-900">
              {props.battery.price.toLocaleString("ru-RU")} ₽
            </p>
            <button className="text-xs bg-neutral-800 text-white px-3 py-1 rounded-full">
              Удалить
            </button>
          </div>
        </div>
      </Link>
    </li>
  );
}
