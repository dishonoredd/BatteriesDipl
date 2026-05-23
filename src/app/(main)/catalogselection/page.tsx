"use client";

import { useState, useMemo } from "react";
import { accumlist } from "@/db/accumslist";
import { Select } from "antd";
import SelectionBtns from "@/components/ui/catalog-selection/SelectionBtns";
import SelectionStats from "@/components/ui/catalog-selection/SelectionStats";
import SelectionItem from "@/components/ui/catalog-selection/SelectionItem";

export default function CatalogSelection() {
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

  const uniqueBrands = [...new Set(accumlist.map((item) => item.brand))];
  const uniqueVoltages = [...new Set(accumlist.map((item) => item.voltage))];
  const uniquePolarities = [...new Set(accumlist.map((item) => item.polarity))];
  const uniqueStandarts = [...new Set(accumlist.map((item) => item.standart))];
  const uniqueTechnologies = [
    ...new Set(accumlist.map((item) => item.technology)),
  ];
  const uniqueSizeTypes = [...new Set(accumlist.map((item) => item.sizeType))];

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

  const filteredAndSortedAccums = useMemo(() => {
    let result = [...accumlist];

    result = result.filter((accum) => {
      if (
        searchQuery &&
        !accum.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      if (brand && accum.brand !== brand) return false;
      if (voltage && accum.voltage !== Number(voltage)) return false;
      if (polarity && accum.polarity !== polarity) return false;
      if (capacity && accum.capacity !== Number(capacity)) return false;
      if (standart && accum.standart !== standart) return false;
      if (technology && accum.technology !== technology) return false;
      if (sizeType && accum.sizeType !== sizeType) return false;
      return true;
    });

    if (sortPrice === "asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortPrice === "desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [
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
    <section className="px-4 min-h-screen">
      <div className="bg-gray-100 p-6 rounded-2xl mb-8 max-w-400 mx-auto">
        <div className="bg-white p-6 rounded-2xl mb-8 max-w-400 mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-xl text-[#222]">Фильтры</h3>
            {activeFiltersCount > 0 && (
              <button
                onClick={resetFilters}
                className="text-sm text-red-500 hover:text-red-700 transition"
              >
                Сбросить все ({activeFiltersCount})
              </button>
            )}
          </div>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Поиск по названию"
              value={tempSearchQuery}
              onChange={(e) => setTempSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
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
              placeholder="Емкость (Ач)"
              value={tempCapacity}
              onChange={(e) => setTempCapacity(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
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
              options={uniqueTechnologies.map((t) => ({ label: t, value: t }))}
            />
            <Select
              allowClear
              value={tempSizeType || undefined}
              onChange={setTempSizeType}
              placeholder="Типоразмер"
              className="w-full"
              options={uniqueSizeTypes.map((st) => ({ label: st, value: st }))}
            />
            <Select
              allowClear
              value={tempSortPrice || undefined}
              onChange={setTempSortPrice}
              placeholder="Сортировка по цене"
              className="w-full"
              options={[
                { label: "Цена: по возрастанию", value: "asc" },
                { label: "Цена: по убыванию", value: "desc" },
              ]}
            />
          </div>

          <SelectionBtns apply={applyFilters} reset={resetFilters} />
        </div>

        <SelectionStats filteredItemsLength={filteredAndSortedAccums.length} />

        {filteredAndSortedAccums.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl">
            <p className="text-gray-500">По вашему запросу ничего не найдено</p>
            <button
              onClick={resetFilters}
              className="mt-4 text-blue-600 hover:text-blue-700 underline"
            >
              Сбросить фильтры
            </button>
          </div>
        ) : (
          <>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
              {filteredAndSortedAccums.map((accum) => (
                <SelectionItem key={accum.id} accum={accum} />
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
