type SelectionBtnsP = {
  reset: () => void;
  apply: () => void;
};

export default function SelectionBtns(props: SelectionBtnsP) {
  return (
    <div className="mt-4 flex justify-end gap-3">
      <button
        onClick={props.reset}
        className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-300 transition duration-200"
      >
        Сбросить
      </button>
      <button
        onClick={props.apply}
        className="px-6 py-2 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition duration-200 shadow-md hover:shadow-lg"
      >
        Применить фильтры
      </button>
    </div>
  );
}
