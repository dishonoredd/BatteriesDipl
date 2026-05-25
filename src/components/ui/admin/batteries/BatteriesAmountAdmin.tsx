type BatteriesAmountAdminP = {
  amount: number;
};

export default function BatteriesAmountAdmin(props: BatteriesAmountAdminP) {
  return (
    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
      <p className="text-gray-600 text-sm sm:text-base">
        Найдено:{" "}
        <span className="font-semibold text-gray-800">{props.amount}</span>{" "}
        аккумуляторов
      </p>
    </div>
  );
}
