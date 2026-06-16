// components/Battery.tsx
"use client";

import { AccumType } from "@/types/AccumType";
import NoBattery from "./NoBattery";
import BatteryNavigation from "./BatteryNavigation";
import BatteryMainContent from "./BatteryMainContent";
import BatteryDiscription from "./BatteryDiscription";
import { useEffect, useState } from "react";
import {
  loadCartFromStorage,
  loadFavoritesFromStorage,
  useAppDispatch,
} from "@/typescript/redux/store";
import SkeletonEvery from "../adds/SkeletonEvery";

type BatteryP = {
  battery: AccumType | undefined;
};

export default function Battery(props: BatteryP) {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setMounted(true);
    Promise.all([
      dispatch(loadCartFromStorage()),
      dispatch(loadFavoritesFromStorage()),
    ]).finally(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  if (!mounted || isLoading) {
    return <SkeletonEvery />;
  }

  return (
    <>
      {!props.battery ? (
        <NoBattery />
      ) : (
        <section className="max-w-400 mx-auto px-4">
          <div className="mb-6">
            <BatteryNavigation name={props.battery.name} />
            <BatteryMainContent battery={props.battery} />
            <BatteryDiscription battery={props.battery} />
          </div>
        </section>
      )}
    </>
  );
}
