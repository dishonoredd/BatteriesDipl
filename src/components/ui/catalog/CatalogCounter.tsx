import { CartItem } from "@/types/CartItemType";
import {
  addItemToCart,
  deleteItemFromCart,
  useAppDispatch,
} from "@/typescript/store";

type CounterProps = {
  amount: number;
  acc: CartItem;
};

const MAX_ITEMS = 10;

export default function CatalogCounter(props: CounterProps) {
  const dispatch = useAppDispatch();

  function deleteOne(id: string) {
    if (props.amount <= 1) {
      const isComfirmed = confirm("Вы уверены что хотите удалить товар?");
      if (isComfirmed) {
        dispatch(deleteItemFromCart(id));
      } else return;
    } else {
      dispatch(deleteItemFromCart(id));
    }
  }

  function addAccToCart(acc: CartItem) {
    if (props.amount < MAX_ITEMS) {
      dispatch(addItemToCart(acc));
    } else {
      alert(`Максимальное число товаров: ${MAX_ITEMS}`);
    }
  }

  return (
    <div className="flex justify-between items-center max-sm:gap-2 sm:gap-4 bg-gray-200 rounded-xl">
      <button
        onClick={() => deleteOne(props.acc.id)}
        className="flex items-center justify-center border-[#333] rounded-xl bg-gray-200 text-[#222] max-sm:h-7 max-sm:w-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 font-medium duration-150
        hover:bg-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 20 20"
        >
          <line
            x1="3"
            y1="10"
            x2="17"
            y2="10"
            stroke="#333333"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <p className="text-[12px] text-[#222]">{props.amount}</p>
      <button
        onClick={() => addAccToCart(props.acc)}
        className="flex items-center justify-center border-[#333] rounded-xl bg-gray-200 text-[#222] max-sm:h-7 max-sm:w-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 font-medium duration-150
        hover:bg-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 20 20"
        >
          <line
            x1="10"
            y1="3"
            x2="10"
            y2="17"
            stroke="#333333"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="3"
            y1="10"
            x2="17"
            y2="10"
            stroke="#333333"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
