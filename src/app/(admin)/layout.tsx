import BurgerMenueAdmin from "@/components/ui/admin/burger/BurgerMenuAdmin";
import HeaderAdmin from "@/components/ui/admin/header/HeaderAdmin";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderAdmin />
      {children}
      <BurgerMenueAdmin />
    </>
  );
}
