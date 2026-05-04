import { AccumType } from "@/types/AccumType";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { action } from "mobx";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type initialBurgerStateType = {
  isOpened: boolean;
};

type initialCartStateType = {
  cartArr: AccumType[];
};

const initialBurgerState: initialBurgerStateType = {
  isOpened: false,
};

const initialCartState: initialCartStateType = {
  cartArr: [],
};

const burgerSlice = createSlice({
  name: "burger",
  initialState: initialBurgerState,
  reducers: {
    switchOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpened = action.payload;
    },
  },
});

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<AccumType>) => {
      state.cartArr.push(action.payload);
    },
  },
});

export const store = configureStore({
  reducer: {
    burgerSlice: burgerSlice.reducer,
  },
});

export const { switchOpen } = burgerSlice.actions;
