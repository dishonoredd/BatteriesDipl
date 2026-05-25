"use client";

import { AccumType } from "@/types/AccumType";
import BatteryItemAdmin from "./BatteryItemAdmin";
import { Select } from "antd";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import BatteriesAmountAdmin from "./BatteriesAmountAdmin";
import NoBatteriesAdmin from "./NoBatteriesAdmin";

type AdminBatteryP = {
  batteries: AccumType[];
};

export default function BatteriesCliAdmin(props: AdminBatteryP) {
  const [tempSearchQuery, setTempSearchQuery] = useState("");
  const [tempBrand, setTempBrand] = useState("");
  const [tempVoltage, setTempVoltage] = useState("");
  const [tempPolarity, setTempPolarity] = useState("");
  const [tempCapacity, setTempCapacity] = useState("");
  const [tempStandart, setTempStandart] = useState("");
  const [tempTechnology, setTempTechnology] = useState("");
  const [tempSizeType, setTempSizeType] = useState("");
  const [tempSortPrice, setTempSortPrice] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [brand, setBrand] = useState("");
  const [voltage, setVoltage] = useState("");
  const [polarity, setPolarity] = useState("");
  const [capacity, setCapacity] = useState("");
  const [standart, setStandart] = useState("");
  const [technology, setTechnology] = useState("");
  const [sizeType, setSizeType] = useState("");
  const [sortPrice, setSortPrice] = useState("");

  const uniqueBrands = [...new Set(props.batteries.map((item) => item.brand))];
  const uniqueVoltages = [
    ...new Set(props.batteries.map((item) => item.voltage)),
  ];
  const uniquePolarities = [
    ...new Set(props.batteries.map((item) => item.polarity)),
  ];
  const uniqueStandarts = [
    ...new Set(props.batteries.map((item) => item.standart)),
  ];
  const uniqueTechnologies = [
    ...new Set(props.batteries.map((item) => item.technology)),
  ];
  const uniqueSizeTypes = [
    ...new Set(props.batteries.map((item) => item.sizeType)),
  ];

  // Применение фильтров
  const applyFilters = () => {
    setSearchQuery(tempSearchQuery);
    setBrand(tempBrand);
    setVoltage(tempVoltage);
    setPolarity(tempPolarity);
    setCapacity(tempCapacity);
    setStandart(tempStandart);
    setTechnology(tempTechnology);
    setSizeType(tempSizeType);
    setSortPrice(tempSortPrice);
  };

  const resetFilters = () => {
    setTempSearchQuery("");
    setTempBrand("");
    setTempVoltage("");
    setTempPolarity("");
    setTempCapacity("");
    setTempStandart("");
    setTempTechnology("");
    setTempSizeType("");
    setTempSortPrice("");

    setSearchQuery("");
    setBrand("");
    setVoltage("");
    setPolarity("");
    setCapacity("");
    setStandart("");
    setTechnology("");
    setSizeType("");
    setSortPrice("");
  };

  const filteredAndSortedBatteries = useMemo(() => {
    let result = [...props.batteries];

    result = result.filter((bat) => {
      if (
        searchQuery &&
        !bat.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      if (brand && bat.brand !== brand) return false;
      if (voltage && bat.voltage !== Number(voltage)) return false;
      if (polarity && bat.polarity !== polarity) return false;
      if (capacity && bat.capacity !== Number(capacity)) return false;
      if (standart && bat.standart !== standart) return false;
      if (technology && bat.technology !== technology) return false;
      if (sizeType && bat.sizeType !== sizeType) return false;
      return true;
    });

    if (sortPrice === "asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortPrice === "desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [
    props.batteries,
    searchQuery,
    brand,
    voltage,
    polarity,
    capacity,
    standart,
    technology,
    sizeType,
    sortPrice,
  ]);

  const activeFiltersCount = [
    searchQuery,
    brand,
    voltage,
    polarity,
    capacity,
    standart,
    technology,
    sizeType,
    sortPrice,
  ].filter(Boolean).length;

  return (
    <section className="min-h-screen bg-gray-50 py-6 sm:py-8">
      <div className="max-w-400 mx-auto px-3 sm:px-4">
        <div className="bg-white rounded-2xl shadow-md mb-6 sm:mb-8 overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <h3 className="font-semibold text-xl sm:text-2xl text-[#222]">
                Управление аккумуляторами
              </h3>
              {activeFiltersCount > 0 && (
                <button
                  onClick={resetFilters}
                  className="text-sm text-red-500 hover:text-red-700 transition"
                >
                  Сбросить все ({activeFiltersCount})
                </button>
              )}
            </div>

            <div className="mb-5">
              <input
                type="text"
                placeholder="Поиск по названию"
                value={tempSearchQuery}
                onChange={(e) => setTempSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl 
                           focus:ring-2 focus:ring-gray-800 focus:border-gray-800 
                           outline-none transition text-base"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              <Select
                allowClear
                value={tempBrand || undefined}
                onChange={setTempBrand}
                placeholder="Бренд"
                className="w-full"
                options={uniqueBrands.map((b) => ({ label: b, value: b }))}
              />
              <Select
                allowClear
                value={tempVoltage || undefined}
                onChange={setTempVoltage}
                placeholder="Напряжение (В)"
                className="w-full"
                options={uniqueVoltages.map((v) => ({
                  label: `${v} В`,
                  value: v,
                }))}
              />
              <Select
                allowClear
                value={tempPolarity || undefined}
                onChange={setTempPolarity}
                placeholder="Полярность"
                className="w-full"
                options={uniquePolarities.map((p) => ({ label: p, value: p }))}
              />
              <input
                type="number"
                placeholder="Ёмкость (Ач)"
                value={tempCapacity}
                onChange={(e) => setTempCapacity(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-xl 
                           focus:ring-2 focus:ring-gray-800 focus:border-gray-800 
                           outline-none transition"
              />
              <Select
                allowClear
                value={tempStandart || undefined}
                onChange={setTempStandart}
                placeholder="Стандарт"
                className="w-full"
                options={uniqueStandarts.map((s) => ({ label: s, value: s }))}
              />
              <Select
                allowClear
                value={tempTechnology || undefined}
                onChange={setTempTechnology}
                placeholder="Технология"
                className="w-full"
                options={uniqueTechnologies.map((t) => ({
                  label: t,
                  value: t,
                }))}
              />
              <Select
                allowClear
                value={tempSizeType || undefined}
                onChange={setTempSizeType}
                placeholder="Типоразмер"
                className="w-full"
                options={uniqueSizeTypes.map((st) => ({
                  label: st,
                  value: st,
                }))}
              />
              <Select
                allowClear
                value={tempSortPrice || undefined}
                onChange={setTempSortPrice}
                placeholder="Сортировка по цене"
                className="w-full"
                options={[
                  { label: "💰 Цена: по возрастанию", value: "asc" },
                  { label: "💰 Цена: по убыванию", value: "desc" },
                ]}
              />
            </div>

            <div className="mt-5 flex justify-end gap-3">
              <button
                onClick={resetFilters}
                className="px-5 py-2 bg-gray-200 text-gray-700 font-medium 
                           rounded-xl hover:bg-gray-300 transition duration-200"
              >
                Сбросить
              </button>
              <button
                onClick={applyFilters}
                className="px-5 py-2 bg-gray-800 text-white font-medium 
                           rounded-xl hover:bg-gray-900 transition duration-200 
                           shadow-md hover:shadow-lg"
              >
                Применить фильтры
              </button>
            </div>
          </div>
        </div>

        <BatteriesAmountAdmin amount={filteredAndSortedBatteries.length} />

        {filteredAndSortedBatteries.length === 0 ? (
          <NoBatteriesAdmin resetFilters={resetFilters} />
        ) : (
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 sm:gap-4">
            {filteredAndSortedBatteries.map((bat) => (
              <BatteryItemAdmin battery={bat} key={bat.id} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
