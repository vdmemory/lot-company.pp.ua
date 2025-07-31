import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins",
});

export const metadata: Metadata = {
  title: "LotCompany - IT Решения и Разработка ПО",
  description: "Профессиональные услуги по разработке программного обеспечения, веб-разработка, кибербезопасность и IT-консалтинг",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-serif`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
