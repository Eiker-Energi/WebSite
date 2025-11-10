"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { routes, stromDropdown } from "@/lib/routes";
import { Dropdown } from "./Dropdown";
import { SearchModal } from "./SearchModal";

const navItems = [
  { name: "Strøm", href: routes.strom, dropdown: true },
  { name: "Fiber", href: routes.fiber },
  { name: "Nettbutikk", href: routes.nettbutikk },
  { name: "Kundeservice", href: routes.kundeservice },
  { name: "Aktuelt", href: routes.aktuelt },
  { name: "Om konsernet", href: routes.omKonsernet },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-teal-900/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href={routes.home} className="flex items-center gap-3" aria-label="Eiker Energi">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/15 text-lg font-semibold">
            EE
          </div>
          <span className="text-lg font-semibold">Eiker Energi</span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          <nav aria-label="Hovedmeny" className="flex items-center gap-2">
            {navItems.map((item) =>
              item.dropdown ? (
                <Dropdown key={item.name} label={item.name} items={stromDropdown} />
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80 ${
                    pathname?.startsWith(item.href)
                      ? "bg-white/20"
                      : "hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              ),
            )}
          </nav>
          <Link
            href={routes.minSide}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-teal-900 transition hover:bg-mint-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
          >
            Min Side
          </Link>
          <SearchModal />
        </div>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Lukk meny" : "Åpne meny"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>
      <div
        className={`lg:hidden ${
          mobileOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden border-t border-white/10 transition-all duration-300 ease-in-out`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobilmeny">
          {stromDropdown.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {navItems
            .filter((item) => !item.dropdown)
            .map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          <Link
            href={routes.minSide}
            className="mt-2 rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-teal-900"
            onClick={() => setMobileOpen(false)}
          >
            Min Side
          </Link>
          <SearchModal triggerClassName="mt-3 flex w-full items-center justify-between gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white" />
        </nav>
      </div>
    </header>
  );
}
