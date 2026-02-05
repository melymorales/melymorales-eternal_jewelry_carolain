import "./globals.css";

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
        <header className="border-b border-gray-300 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl tracking-wide">
              Eternal Jewelry ✨
            </h1>

            <nav className="space-x-6 text-sm">
              <a href="/collares" className="hover:text-gray-500">
                Collares
              </a>
              <a href="/pulseras" className="hover:text-gray-500">
                Pulseras
              </a>
              <a href="/aretes" className="hover:text-gray-500">
                Aretes
              </a>
              <a href="/anillos" className="hover:text-gray-500">
                Anillos
              </a>
              <a
                href="/promociones"
                className="text-[#D4AF37] font-medium"
              >
                Promociones
              </a>
            </nav>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-10">
          {children}
        </main>

        <footer className="border-t border-gray-300 text-center text-sm text-gray-500 py-6">
          © {new Date().getFullYear()} Eternal Jewelry
        </footer>
      </body>
    </html>
  );
}
