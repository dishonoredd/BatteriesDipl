import { AccumType } from "@/types/AccumType";
import Image from "next/image";
import BatteryBtns from "./BatteryBtns";

type BatteryMainContentP = {
  battery: AccumType;
};

export default function BatteryMainContent(props: BatteryMainContentP) {
  const specifications = [
    { label: "Бренд", value: props.battery.brand },
    { label: "Напряжение", value: `${props.battery.voltage} В` },
    { label: "Ёмкость", value: `${props.battery.capacity} Ач` },
    { label: "Полярность", value: props.battery.polarity },
    { label: "Стандарт", value: props.battery.standart },
    { label: "Технология", value: props.battery.technology },
    { label: "Типоразмер", value: props.battery.sizeType },
  ];

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8">
          <div>
            <div className="relative w-full pt-[100%] max-sm:bg-gray-100 lg:bg-none rounded-xl overflow-hidden">
              <Image
                src={props.battery.img}
                alt={props.battery.name}
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-1">
                {props.battery.brand}
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                {props.battery.name}
              </h1>
            </div>

            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>В
                наличии
              </span>
            </div>

            <div className="mb-6">
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                {props.battery.price.toLocaleString("ru-RU")} ₽
              </p>
            </div>

            <BatteryBtns battery={props.battery} />

            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Характеристики
              </h3>
              <div className="space-y-3">
                {specifications.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex justify-between items-center py-2 border-b border-gray-50"
                  >
                    <span className="text-gray-500 text-sm">{spec.label}</span>
                    <span className="text-gray-800 font-medium text-sm">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
