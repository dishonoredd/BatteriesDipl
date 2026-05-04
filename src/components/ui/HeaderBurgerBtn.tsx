"use client";

import { switchOpen, useAppDispatch, useAppSelector } from "@/typescript/store";

export default function HeaderBurgerBtn() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.burgerSlice.isOpened);

  return (
    <button
      onClick={() => dispatch(switchOpen(!isOpen))}
      className="burger-menu"
    >
      <span className="burger-line"></span>
    </button>
  );
}
