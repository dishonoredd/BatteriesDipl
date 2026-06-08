"use client";

import { changeOpen, useAppDispatch } from "@/typescript/store";

export default function HeaderBurgerBtn() {
  const dispatch = useAppDispatch();

  function switchState() {
    dispatch(changeOpen());
  }

  return (
    <button
      onClick={() => switchState()}
      className="burger-menu"
      aria-label="Открыть меню"
    >
      <div className="burger-line"></div>
    </button>
  );
}
