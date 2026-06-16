import { AccumType } from "@/types/AccumType";
import { CartItem } from "@/types/CartItemType";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type initialBurgerStateType = {
  isOpened: boolean;
  isOpenAdmin: boolean;
};

type initialCartStateType = {
  cartArr: CartItem[];
};

type initialFavoriteStateType = {
  favorites: AccumType[];
};

const CART_STORAGE_KEY = "cartData";
const FAVORITES_STORAGE_KEY = "favoritesData";

const loadFromStorage = <T>(key: string, defaultValue: T): T => {
  if (typeof window === "undefined") return defaultValue;

  try {
    const storedData = localStorage.getItem(key);
    if (storedData) {
      return JSON.parse(storedData);
    }
  } catch (error) {
    console.error(`Error loading ${key} from localStorage:`, error);
  }
  return defaultValue;
};

const saveToStorage = <T>(key: string, data: T): void => {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
  }
};

const initialBurgerState: initialBurgerStateType = {
  isOpened: false,
  isOpenAdmin: false,
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
    changeOpen: (state) => {
      state.isOpened = !state.isOpened;
    },
    switchOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpened = action.payload;
    },
    changeOpenAdmin: (state) => {
      state.isOpenAdmin = !state.isOpened;
    },
    switchOpenAdmin: (state, action: PayloadAction<boolean>) => {
      state.isOpenAdmin = action.payload;
    },
  },
});

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    loadCartFromStorage: (state) => {
      const data = loadFromStorage<CartItem[]>(CART_STORAGE_KEY, []);
      state.cartArr = data;
    },

    clearCart: (state) => {
      state.cartArr = [];
      saveToStorage(CART_STORAGE_KEY, state.cartArr);
    },

    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const MAX_AMOUNT = 10;

      const existing = state.cartArr.find(
        (item) => item.id === action.payload.id,
      );

      if (existing) {
        if (existing.amount && existing.amount < MAX_AMOUNT) {
          existing.amount += 1;
        } else return;
      } else {
        state.cartArr.unshift({ ...action.payload, amount: 1 });
      }

      saveToStorage(CART_STORAGE_KEY, state.cartArr);
    },

    deleteItemFromCart: (state, action: PayloadAction<string>) => {
      const existing = state.cartArr.find((item) => item.id === action.payload);

      if (existing && existing.amount) {
        if (existing.amount > 1) {
          existing.amount -= 1;
        } else {
          state.cartArr = state.cartArr.filter(
            (item) => item.id !== action.payload,
          );
        }
      }

      saveToStorage(CART_STORAGE_KEY, state.cartArr);
    },

    deleteItemFromCartFinally: (state, action: PayloadAction<string>) => {
      state.cartArr = state.cartArr.filter(
        (item) => item.id !== action.payload,
      );
      saveToStorage(CART_STORAGE_KEY, state.cartArr);
    },
  },
});

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialFavoriteState,
  reducers: {
    loadFavoritesFromStorage: (state) => {
      const data = loadFromStorage<AccumType[]>(FAVORITES_STORAGE_KEY, []);
      state.favorites = data;
    },

    toggleFavorite: (state, action: PayloadAction<AccumType>) => {
      const index = state.favorites.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index === -1) {
        state.favorites.unshift(action.payload);
      } else {
        state.favorites.splice(index, 1);
      }

      saveToStorage(FAVORITES_STORAGE_KEY, state.favorites);
    },

    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload,
      );
      saveToStorage(FAVORITES_STORAGE_KEY, state.favorites);
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

export const { toggleFavorite, removeFromFavorites, loadFavoritesFromStorage } =
  favoritesSlice.actions;
export const { switchOpen, changeOpen, switchOpenAdmin, changeOpenAdmin } =
  burgerSlice.actions;
export const {
  addItemToCart,
  deleteItemFromCart,
  deleteItemFromCartFinally,
  clearCart,
  loadCartFromStorage,
} = cartSlice.actions;

export const selectIsFavorite = (state: RootState, productId: string) =>
  state.favoritesSlice.favorites.some((item) => item.id === productId);
