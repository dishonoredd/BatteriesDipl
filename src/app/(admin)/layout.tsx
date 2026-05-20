import HeaderAdmin from "@/components/ui/admin/HeaderAdmin";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderAdmin />
      {children}
    </>
  );
}
