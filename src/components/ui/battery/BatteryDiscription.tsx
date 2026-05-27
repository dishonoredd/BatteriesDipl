import { AccumType } from "@/types/AccumType";

type BatteryDiscriptionP = {
  battery: AccumType;
};

export default function BatteryDiscription(props: BatteryDiscriptionP) {
  return (
    <div className="bg-white rounded-2xl shadow-lg mt-6 p-6 sm:p-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Описание</h3>
      <p className="text-gray-600 leading-relaxed">
        Аккумулятор {props.battery.brand} {props.battery.name} — это надёжный
        источник питания для вашего автомобиля. Ёмкость {props.battery.capacity}{" "}
        Ач и напряжение {props.battery.voltage} В обеспечивают стабильный пуск
        двигателя в любых погодных условиях. Технология{" "}
        {props.battery.technology} гарантирует длительный срок службы и высокую
        производительность.
      </p>
    </div>
  );
}
