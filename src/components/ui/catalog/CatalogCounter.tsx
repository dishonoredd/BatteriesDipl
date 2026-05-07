import { AccumType } from "@/types/AccumType";
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
    dispatch(deleteItemFromCart(id));
  }

  function addAccToCart(acc: CartItem) {
    if (props.amount < MAX_ITEMS) {
      dispatch(addItemToCart(acc));
    } else {
      alert(`Максимальное число товаров: ${MAX_ITEMS}`);
    }
  }

  return (
    <div className="flex justify-between items-center">
      <button
        onClick={() => deleteOne(props.acc.id)}
        className="min-w-12 font-bold border-2 border-[#333] rounded-lg bg-[#333] text-white p-2
        duration-150 hover:bg-white hover:text-[#222] hover:border-[#222]"
      >
        -
      </button>
      <p className="text-xl text-[#222]">{props.amount}</p>
      <button
        onClick={() => addAccToCart(props.acc)}
        className="min-w-12 font-bold border-2 border-[#333] rounded-lg bg-[#333] text-white p-2
        duration-150 hover:bg-white hover:text-[#222] hover:border-[#222]"
      >
        +
      </button>
    </div>
  );
}
