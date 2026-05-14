import { pathRouter } from "../routes/router";

export enum options {
  new = "Сначала новые",
  old = "Сначала старые",
  cheap = "Сначала дешевые",
  expensive = "Сначала дорогие",
}

export const optionsArr = [
  options.new,
  options.old,
  options.cheap,
  options.expensive,
];

export const batteryPath = pathRouter.BATTERY;
