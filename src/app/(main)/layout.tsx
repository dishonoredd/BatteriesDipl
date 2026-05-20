import Header from "@/components/main/Header";
import Footer from "@/components/main/Footer";
import BurgerMenue from "@/components/main/BurgerMenue";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <BurgerMenue />
    </>
  );
}
