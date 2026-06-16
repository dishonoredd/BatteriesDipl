"use client";

import { AccumType } from "@/types/AccumType";
import {
  useAppSelector,
  useAppDispatch,
  loadFavoritesFromStorage, // Импортируем новый action
} from "@/typescript/redux/store";
import FavoriteesNoItems from "@/components/ui/favorites/FavoritesNoItems";
import { Select } from "antd";
import { useMemo, useState, useEffect } from "react";
import { options, optionsArr } from "./constants";
import FavoriteItem from "@/components/ui/favorites/FavoriteItem";
import SkeleetonEvery from "@/components/ui/adds/SkeletonEvery";

export default function Favorites() {
  const [mounted, setMounted] = useState(false);
  const favorites = useAppSelector((state) => state.favoritesSlice.favorites);
  const dispatch = useAppDispatch();

  const [sortOption, setSortOption] = useState<string>(options.new);

  useEffect(() => {
    setMounted(true);
    dispatch(loadFavoritesFromStorage());
  }, [dispatch]);

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

  if (!mounted) {
    return <SkeleetonEvery></SkeleetonEvery>;
  }

  return (
    <div className="min-h-screen px-3 sm:px-4 md:px-6 py-4 sm:py-6">
      {favorites.length ? (
        <>
          <header
            className="bg-white rounded-xl max-w-7xl mx-auto my-4 sm:my-6 md:my-8 lg:my-10 
                       py-4 sm:py-5 px-4 sm:px-6 md:px-8 lg:px-10 
                       flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0"
          >
            <p className="text-xl sm:text-2xl font-semibold text-gray-900">
              Избранное
            </p>

            <Select
              defaultValue={options.new}
              value={sortOption}
              onChange={handleSortChange}
              options={optionsArr.map((option) => {
                return { value: option };
              })}
              placeholder="Сортировка"
              className="w-full sm:w-48 md:w-56"
            />
          </header>

          <ul
            className="
            grid 
            grid-cols-2        
            md:grid-cols-3
            lg:grid-cols-4           
            xl:grid-cols-4           
            max-w-7xl mx-auto 
            gap-3 sm:gap-4 md:gap-5 lg:gap-6 
            mb-10
          "
          >
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
