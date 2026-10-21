"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  exact?: boolean;
};

// Посилання з підсвіткою активного пункту меню.
// usePathname() працює лише в клієнтських компонентах, тому тут "use client".
export default function NavLink({ href, children, exact = false }: NavLinkProps) {
  const pathname = usePathname();

  const isActive = exact
    ? pathname === href
    : pathname === href || pathname.startsWith(href + "/");

  return (
    <Link href={href} className={isActive ? "nav-link active" : "nav-link"}>
      {children}
    </Link>
  );
}
