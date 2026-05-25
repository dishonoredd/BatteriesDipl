"use client";

import { Select } from "antd";
import Image from "next/image";

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
const sizeTypes = [
  "L1",
  "L2",
  "L3",
  "L4",
  "L5",
  "D20",
  "D23",
  "D26",
  "D3",
  "D4",
  "D5",
  "D6",
];

export default function AddBatteryPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8">
      <div className="max-w-4xl mx-auto px-3 sm:px-4">
        {/* Заголовок */}
        <div className="mb-6 sm:mb-8">
          <button
            onClick={() => window.history.back()}
            className="text-gray-500 hover:text-gray-700 mb-3 flex items-center gap-1 text-sm"
          >
            ← Назад
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Добавление аккумулятора
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mt-1">
            Заполните все поля для добавления нового аккумулятора в каталог
          </p>
        </div>

        {/* Форма */}
        <form className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="p-4 sm:p-6 space-y-5 sm:space-y-6">
            {/* Бренд */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Бренд <span className="text-red-500">*</span>
              </label>
              <Select
                allowClear
                placeholder="Выберите бренд"
                className="w-full"
                size="large"
                options={brands.map((brand) => ({
                  label: brand,
                  value: brand,
                }))}
              />
            </div>

            {/* Название */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Название модели <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Например: Silver Dynamic 560"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none transition"
              />
            </div>

            {/* Изображение */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                URL изображения <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none transition"
              />

              {/* Предпросмотр изображения */}
              <div className="mt-3">
                <p className="text-xs text-gray-500 mb-1">Предпросмотр:</p>
                <div className="relative w-32 h-32 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Нет изображения</span>
                </div>
              </div>
            </div>

            {/* Цена и ёмкость в одной строке */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Цена (₽) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  placeholder="Например: 5000"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Ёмкость (Ач) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  placeholder="Например: 60"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-800 focus:border-gray-800 outline-none transition"
                />
              </div>
            </div>

            {/* Напряжение и полярность */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Напряжение (В)
                </label>
                <Select
                  placeholder="Выберите напряжение"
                  className="w-full"
                  size="large"
                  options={voltages.map((v) => ({ label: `${v} В`, value: v }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Полярность
                </label>
                <Select
                  placeholder="Выберите полярность"
                  className="w-full"
                  size="large"
                  options={polarities.map((p) => ({ label: p, value: p }))}
                />
              </div>
            </div>

            {/* Стандарт и технология */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Стандарт
                </label>
                <Select
                  placeholder="Выберите стандарт"
                  className="w-full"
                  size="large"
                  options={standarts.map((s) => ({ label: s, value: s }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Технология
                </label>
                <Select
                  placeholder="Выберите технологию"
                  className="w-full"
                  size="large"
                  options={technologies.map((t) => ({ label: t, value: t }))}
                />
              </div>
            </div>

            {/* Типоразмер */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Типоразмер <span className="text-red-500">*</span>
              </label>
              <Select
                allowClear
                placeholder="Выберите типоразмер"
                className="w-full"
                size="large"
                options={sizeTypes.map((st) => ({ label: st, value: st }))}
              />
            </div>
          </div>

          {/* Кнопки действия */}
          <div className="border-t border-gray-200 p-4 sm:p-6 bg-gray-50 flex flex-col sm:flex-row justify-end gap-3">
            <button
              type="button"
              onClick={() => window.history.back()}
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
    </div>
  );
}
