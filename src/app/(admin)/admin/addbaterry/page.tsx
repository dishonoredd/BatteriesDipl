"use client";

import { Select } from "antd";
import Huinya from "./huinya";
import { Controller, useForm } from "react-hook-form";

type FormType = {
  brand: string;
  name: string;
  img: string;
  price: number;
  capacity: number;
  voltage: 1 | 6 | 12;
  polarity: "Боковые клеммы" | "Обратная" | "Прямая" | "Универсальная";
  standart: "ASIA" | "EURO" | "Universal";
  technology: "AGM" | "EFB" | "SLI";
  sizeType: string;
};

const brands = [
  "ABSEL",
  "EUROSTART",
  "MERCEDES-BENZ",
  "VARTA",
  "ZUBR",
  "DELTA",
];
const voltages = [1, 6, 12];
const polarities = ["Боковые клеммы", "Обратная", "Прямая", "Универсальная"];
const standarts = ["ASIA", "EURO", "Universal"];
const technologies = ["AGM", "EFB", "SLI"];

export default function AddBatteryAdmin() {
  const form = useForm<FormType>({
    mode: "onChange",
    defaultValues: {
      brand: "",
      name: "",
      img: "",
      price: 0,
      capacity: 0,
      voltage: 12,
      polarity: "Прямая",
      standart: "EURO",
      technology: "SLI",
      sizeType: "",
    },
  });

  const errorBrand = form.formState.errors.brand;
  const errorName = form.formState.errors.name;
  const errorImage = form.formState.errors.img;
  const errorPrice = form.formState.errors.price;

  return (
    <>
      <div className="max-w-220 mx-auto">
        <div className="">
          <button className="text-gray-500 hover:text-gray-700 mb-3 flex items-center text-sm">
            Вернуться назад
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Добавление аккумулятора
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mt-1">
            Заполните все поля для добавления нового аккумулятора в каталог
          </p>
        </div>
        <form className="bg-white rounded-2xl overflow-hidden shadow">
          <div className="p-6">
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Бренд
              </label>
              <Controller
                name="brand"
                control={form.control}
                rules={{ required: "Выберете бренд" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    size="large"
                    placeholder="Выберите бренд"
                    className="w-full"
                    status={errorBrand ? "error" : ""}
                    options={brands.map((brand) => ({
                      label: brand,
                      value: brand,
                    }))}
                  />
                )}
              />
              {errorBrand && (
                <p className="text-red-500 text-xs mt-1">
                  {errorBrand.message}
                </p>
              )}
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Название модели
              </label>
              <Controller
                name="name"
                control={form.control}
                rules={{ required: "Введите название модели" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="QX9011A2B12"
                    className={`w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none transition
                      ${errorName ? "border-red-500 bg-red-50" : "border-gray-300"}`}
                  />
                )}
              />
              {errorName && (
                <p className="text-red-500 text-xs mt-1">{errorName.message}</p>
              )}
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                URL изображения
              </label>
              <Controller
                name="img"
                control={form.control}
                rules={{ required: "Введите URL изображения" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="https://example.com/image.jpg"
                    className={`w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none transition
                      ${errorImage ? "border-red-500 bg-red-50" : "border-gray-300"}`}
                  />
                )}
              />
              {errorImage && (
                <p className="text-red-500 text-xs mt-1">
                  {errorImage.message}
                </p>
              )}
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Цена (₽)
              </label>
              <Controller
                name="price"
                control={form.control}
                rules={{
                  required: "Введите цену",
                  min: { value: 1, message: "Цена должна быть больше 0" },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    placeholder="5000"
                    className={`w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none transition
                      ${errorPrice ? "border-red-500 bg-red-50" : "border-gray-300"}`}
                  />
                )}
              />
              {errorPrice && (
                <p className="text-red-500 text-xs mt-1">
                  {errorPrice.message}
                </p>
              )}
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Ёмкость (Ач)
              </label>

              <input
                type="text"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none transition"
              />
            </div>
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Напряжение (В)
                </label>
                <Select className="w-full" size="large" />
              </div>
              <div className="flex-col block">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Полярность
                </label>
                <Select className="w-full" size="large" />
              </div>
              <div className="">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Стандарт
                </label>
                <Select className="w-full" size="large" />
              </div>
              <div className="flex-col block">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Технология
                </label>
                <Select className="w-full" size="large" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Типоразмер
              </label>
              <input
                type="text"
                placeholder="Введите типоразмер"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none transition"
              />
            </div>
          </div>
          <div className="border-t border-gray-200 p-4 sm:p-6 bg-gray-50 flex flex-col sm:flex-row justify-end gap-3">
            <button
              type="button"
              onClick={() => {}}
              className="px-6 py-2.5 bg-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-300 transition duration-200"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-gray-800 text-white font-medium rounded-xl hover:bg-gray-900 transition duration-200 shadow-md"
            >
              Добавить аккумулятор
            </button>
          </div>
        </form>
      </div>
      <Huinya />
    </>
  );
}
