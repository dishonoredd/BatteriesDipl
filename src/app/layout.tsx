import type { Metadata } from "next";
import "../styles/style.css";
import { ReduxProvider } from "@/components/additional/CustomReduxProvider";
import { ConfigProvider } from "antd";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: {
    template: "%s - Аккумуляторы Сочи",
    default: "Аккумуляторы Сочи – купить автомобильный аккумулятор с доставкой",
  },
  description:
    "Широкий выбор автомобильных аккумуляторов в Сочи. Низкие цены, гарантия качества, быстрая доставка. Подбор АКБ на любой автомобиль.",
  keywords:
    "аккумулятор Сочи, купить аккумулятор, АКБ для авто, автомобильный аккумулятор, замена аккумулятора Сочи",
};

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <ReduxProvider>
          <ConfigProvider
            theme={{
              components: {
                Select: {
                  activeBorderColor: "d9d9d9",
                  hoverBorderColor: "d9d9d9",
                  optionSelectedBg: "#ececec",
                  activeOutlineColor: "ececec",
                },
              },
            }}
          >
            {children}
          </ConfigProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
