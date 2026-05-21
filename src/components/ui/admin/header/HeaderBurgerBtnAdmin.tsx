"use client";

import {
  changeOpenAdmin,
  switchOpenAdmin,
  useAppDispatch,
} from "@/typescript/store";

export default function HeaderBurgerBtnAdmin() {
  const dispatch = useAppDispatch();

  function switchState() {
    dispatch(changeOpenAdmin());
  }

  return (
    <button onClick={() => switchState()} className="burger-menu">
      <div className="burger-line"></div>
    </button>
  );
}
