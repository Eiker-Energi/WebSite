"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";


interface DropdownItem {
  name: string;
  href: string;
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
}

export function Dropdown({ label, items }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!menuRef.current || !triggerRef.current) return;
      if (
        !menuRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        type="button"
        className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-text-900 transition hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-400"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="strom-menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        {label}
        <span aria-hidden className="transition-transform" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
          ▾
        </span>
      </button>
      <div
        ref={menuRef}
        id="strom-menu"
        role="menu"
        aria-hidden={!open}
        className={`absolute left-0 mt-2 w-56 rounded-2xl bg-white p-2 shadow-soft ring-1 ring-black/5 transition-opacity ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            role="menuitem"
            className="block rounded-xl px-4 py-2 text-sm font-semibold text-text-900 hover:bg-sand-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-400"
            onClick={() => setOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
