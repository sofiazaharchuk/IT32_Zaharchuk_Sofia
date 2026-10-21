import type { ReactNode } from "react";
import NavLink from "../components/NavLink";

// Вкладений layout розділу «Спеціальності».
// Він діє для /specialties та всіх сторінок усередині цієї папки.
export default function SpecialtiesLayout({ children }: { children: ReactNode }) {
  return (
    <section className="section-layout">
      <div className="section-head">
        <h2>Спеціальності</h2>
        <p>Оберіть напрям навчання</p>

        <nav className="sub-nav" aria-label="Категорії спеціальностей">
          <NavLink href="/specialties" exact>
            Усі спеціальності
          </NavLink>
          <NavLink href="/specialties/programming">Програмування</NavLink>
          <NavLink href="/specialties/design">Дизайн</NavLink>
        </nav>
      </div>

      <div className="section-body">{children}</div>
    </section>
  );
}
