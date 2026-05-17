"use client";

import { AccumType } from "@/types/AccumType";
import { useAppSelector } from "@/typescript/store";
import FavoriteesNoItems from "@/components/ui/favorites/FavoritesNoItems";
import { Select } from "antd";
import { useMemo, useState } from "react";
import { options, optionsArr } from "./constants";
import FavoriteItem from "@/components/ui/favorites/FavoriteItem";

export default function Favorites() {
  const favorites = useAppSelector((state) => state.favoritesSlice.favorites);

  const [sortOption, setSortOption] = useState<string>(options.new);

  function sortFavorites(accs: AccumType[], sortType: string) {
    const sortedItems = [...accs];

    switch (sortType) {
      case options.cheap:
        return sortedItems.sort((a, b) => a.price - b.price);

      case options.expensive:
        return sortedItems.sort((a, b) => b.price - a.price);

      case options.new:
        return sortedItems;

      case options.old:
        return sortedItems.reverse();

      default:
        return sortedItems;
    }
  }

  const sortedFavorites = useMemo(() => {
    return sortFavorites(favorites, sortOption);
  }, [favorites, sortOption]);

  function handleSortChange(value: string) {
    setSortOption(value);
  }

  return (
    <div className="min-h-screen">
      {favorites.length ? (
        <>
          <header
            className="bg-white rounded-xl max-w-7xl mx-auto my-10 py-5 px-10 flex items-center
           justify-between"
          >
            <p className="text-2xl font-semibold text-gray-900">Избранное</p>

            <Select
              defaultValue={options.new}
              value={sortOption}
              onChange={handleSortChange}
              options={optionsArr.map((option) => {
                return { value: option };
              })}
              placeholder="Сортировка"
            ></Select>
          </header>
          <ul className="grid grid-cols-4 max-w-7xl mx-auto gap-6 mb-10">
            {sortedFavorites.map((item) => (
              <FavoriteItem key={item.id} item={item} />
            ))}
          </ul>
        </>
      ) : (
        <FavoriteesNoItems />
      )}
    </div>
  );
}
