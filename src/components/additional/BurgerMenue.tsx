"use client";

import { switchOpen, useAppDispatch, useAppSelector } from "@/typescript/store";

export default function BurgerMenue() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.burgerSlice.isOpened);

  return (
    <div
      className={`w-full h-screen flex -translate-x-full fixed top-0 z-10
        transition duration-400 ${isOpen ? "translate-x-0" : ""}`}
    >
      <div className="bg-[#222] w-1/3 border-r border-r-[#393939]">
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
      </div>
      <div
        onClick={() => dispatch(switchOpen(false))}
        className="bg-transparent grow"
      ></div>
    </div>
  );
}
