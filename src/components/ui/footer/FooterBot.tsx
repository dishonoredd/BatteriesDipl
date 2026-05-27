export default function FooterBot() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-gray-800 pt-6 mt-4">
      <div className="text-center">
        <p className="text-gray-500 text-sm">
          © {currentYear} Аккумуляторы в Сочи. Все права защищены.
        </p>
      </div>
    </div>
  );
}
