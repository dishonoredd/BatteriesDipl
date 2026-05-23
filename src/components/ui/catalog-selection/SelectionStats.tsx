type SelectionBtnsP = {
  filteredItemsLength: number;
};

export default function SelectionStats(props: SelectionBtnsP) {
  return (
    <div className="max-w-400 mx-auto">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <p className="text-gray-600 text-sm">
          Найдено товаров: {""}
          <span className="font-semibold text-[#222]">
            {props.filteredItemsLength}
          </span>
        </p>
      </div>
    </div>
  );
}
