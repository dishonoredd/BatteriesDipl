export type AccumType = {
  id: string; // айди
  name: string; // название
  img: string; // картинка
  price: number; // цена
  brand: "ABSEL" | "EUROSTART" | "MERCEDES-BENZ" | "VARTA" | "ZUBR" | "DELTA"; // бренд
  voltage: 1 | 6 | 12; // напряжение
  polarity: "Боковые клеммы" | "Обратная" | "Прямая" | "Универсальная"; // полярность
  capacity: number; // емкость аккумулятора она может быть от 1 до 220
  standart: "ASIA" | "EURO" | "Universal"; // стандарт европпа или азия
  technology: "AGM" | "EFB" | "SLI"; // технология
  sizeType: string; // типоразмер хардкод L1 L2 L3 L4 L5 D20 D23 D26 D3 D4 D5 D6
};
