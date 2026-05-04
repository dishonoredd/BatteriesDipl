import { AccumType } from "@/types/AccumType";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
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

type initialFavoriteStateType = {
  favorites: AccumType[];
};

const initialBurgerState: initialBurgerStateType = {
  isOpened: false,
};

const initialCartState: initialCartStateType = {
  cartArr: [],
};

const initialFavoriteState: initialFavoriteStateType = {
  favorites: [],
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
    deleteItemFromCart: (state, action: PayloadAction<string>) => {
      state.cartArr = state.cartArr.filter(
        (battery) => battery.id !== action.payload,
      );
    },
  },
});

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialFavoriteState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<AccumType>) => {
      const index = state.favorites.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index === -1) {
        state.favorites.push(action.payload);
      } else {
        state.favorites.splice(index, 1);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const store = configureStore({
  reducer: {
    burgerSlice: burgerSlice.reducer,
    cartSlice: cartSlice.reducer,
    favoritesSlice: favoritesSlice.reducer,
  },
});

export const { toggleFavorite, removeFromFavorites } = favoritesSlice.actions;
export const { switchOpen } = burgerSlice.actions;
export const { addItemToCart, deleteItemFromCart } = cartSlice.actions;

export const selectIsFavorite = (state: RootState, productId: string) =>
  state.favoritesSlice.favorites.some((item) => item.id === productId);
