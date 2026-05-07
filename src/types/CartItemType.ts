import { AccumType } from "./AccumType";

export type CartItem = AccumType & {
  amount: number;
};
