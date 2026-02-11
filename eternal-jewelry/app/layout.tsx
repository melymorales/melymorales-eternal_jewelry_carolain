import "./globals.css";
import { Footer } from "../src/components/Footer";
import { Header } from "@/src/components/Header";

export const metadata = {
  title: "Eternal Jewelry",
  description: "Joyas elegantes y atemporales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        
        <Header />

        <main className="max-w-7xl mx-auto px-6 py-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
