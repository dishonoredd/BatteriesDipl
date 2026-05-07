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
    <div className="flex justify-between">
      <button
        onClick={() => deleteOne(props.acc.id)}
        className="border rounded-lg"
      >
        -
      </button>
      <p>{props.amount}</p>
      <button
        onClick={() => addAccToCart(props.acc)}
        className="border rounded-lg"
      >
        +
      </button>
    </div>
  );
}
