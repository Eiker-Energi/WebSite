"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

interface SearchModalProps {
  triggerClassName?: string;
}

export function SearchModal({ triggerClassName }: SearchModalProps) {
  const [open, setOpen] = useState(false);
  const dialogId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={
          triggerClassName ??
          "hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80 lg:flex"
        }
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={dialogId}
      >
        <Search className="h-4 w-4" aria-hidden />
        Søk
        <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs text-white/80">Ctrl + K</span>
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-text-900/60 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              id={dialogId}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-soft"
            >
              <div className="flex items-center gap-3">
                <Search className="h-5 w-5 text-teal-900" aria-hidden />
                <input
                  ref={inputRef}
                  type="search"
                  placeholder="Hva leter du etter?"
                  className="h-12 flex-1 rounded-xl border border-text-900/20 px-4 text-base text-text-900 focus:border-teal-900 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-text-900 transition hover:bg-sand-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-400"
                >
                  Lukk
                </button>
              </div>
              <p className="mt-4 text-sm text-text-900/70">
                Søk etter strømavtaler, fiber, kundeservice eller aktuelle saker hos Eiker Energi.
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
