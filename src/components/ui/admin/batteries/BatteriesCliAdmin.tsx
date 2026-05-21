"use client";

import { AccumType } from "@/types/AccumType";
import BatteryItemAdmin from "./BatteryItemAdmin";
import { ChangeEvent, useEffect, useMemo, useState } from "react";

type AdminBatteryP = {
  batteries: AccumType[];
};

export default function BatteriesCliAdmin(props: AdminBatteryP) {
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  const filteredBatteries = useMemo(() => {
    if (!debouncedSearch) return props.batteries;

    return props.batteries.filter((bat) =>
      bat.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );
  }, [props.batteries, debouncedSearch]);

  return (
    <div className="min-h-screen max-w-400 mx-auto">
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setSearchText(e.target.value);
        }}
        type="text"
        name="search"
        placeholder="Поиск по названию"
        className="border-neutral-300 border-2 rounded-lg px-6 py-2 my-5 focus:border-gray-500"
      />
      {filteredBatteries.length === 0 ? (
        <div className="text-center my-70">
          <p className="text-gray-500 text-lg">
            По запросу "{debouncedSearch}" ничего не найдено
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Попробуйте изменить поисковый запрос
          </p>
        </div>
      ) : (
        <ul className="grid grid-cols-7 gap-10">
          {filteredBatteries.map((bat) => (
            <BatteryItemAdmin battery={bat} key={bat.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
