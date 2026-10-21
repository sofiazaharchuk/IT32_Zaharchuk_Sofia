import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import NavLink from "./components/NavLink";
import "./globals.css";

export const metadata: Metadata = {
  title: "Коледж «Прогрес»",
  description: "Сайт навчального закладу: спеціальності, програмування, дизайн, контакти",
};

// Головний layout: шапка з назвою закладу та меню, змінний вміст і підвал.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="uk">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand">
              🎓 Коледж «Прогрес»
            </Link>

            <nav className="main-nav" aria-label="Головне меню">
              <NavLink href="/" exact>
                Головна
              </NavLink>
              <NavLink href="/specialties">Спеціальності</NavLink>
              <NavLink href="/contacts">Контакти</NavLink>
            </nav>
          </div>
        </header>

        <main className="site-main">
          <div className="container">{children}</div>
        </main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <span>© 2026 Коледж «Прогрес». Усі права захищено.</span>
            <span>Навчальний проєкт на Next.js App Router</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
