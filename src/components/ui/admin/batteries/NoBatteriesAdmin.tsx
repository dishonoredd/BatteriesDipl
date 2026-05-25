type NoBatteriesAdminP = {
  resetFilters: () => void;
};

export default function NoBatteriesAdmin(props: NoBatteriesAdminP) {
  return (
    <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 mx-auto text-gray-300 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p className="text-gray-500 text-base sm:text-lg">
        По вашему запросу ничего не найдено
      </p>
      <p className="text-gray-400 text-sm mt-2">
        Попробуйте изменить параметры поиска
      </p>
      <button
        onClick={props.resetFilters}
        className="mt-5 text-blue-600 hover:text-blue-700 underline text-sm"
      >
        Сбросить все фильтры
      </button>
    </div>
  );
}
