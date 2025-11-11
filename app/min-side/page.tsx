import type { Route } from "next";
import Link from "next/link";

import { routes } from "@/lib/routes";

const loginOptions = [
  {
    title: "Logg inn",
    description: "Ny versjon av Min Side med full oversikt over strøm, fiber og faktura.",
    href: "https://minside.eikerenergi.no",
  },
  {
    title: "Logg inn tidligere versjon",
    description: "Tilgang til historiske fakturaer og eldre avtaler.",
    href: "https://gammel-minside.eikerenergi.no",
  },
];

export const metadata = {
  title: "Min Side",
  description: "Logg inn på Min Side for å se forbruk, faktura og produkter fra Eiker Energi.",
};

export default function MinSidePage() {
  return (
    <div className="space-y-16">
      <header className="rounded-3xl bg-white px-6 py-12 shadow-soft sm:px-10">
        <h1 className="text-4xl font-semibold text-teal-900">Min side</h1>
        <p className="mt-4 max-w-2xl text-base text-text-900/80">
          Logg inn med BankID for å se avtaler, fakturaer og forbruk. Du kan velge mellom den nye versjonen og tidligere løsning.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {loginOptions.map((option) => (
            <div key={option.title} className="space-y-4 rounded-3xl border border-teal-900/10 bg-sand-100 p-6 shadow-soft">
              <h2 className="text-xl font-semibold text-teal-900">{option.title}</h2>
              <p className="text-sm text-text-900/80">{option.description}</p>
              <a
                className="inline-flex rounded-full bg-mint-400 px-5 py-2 text-sm font-semibold text-text-900 shadow-soft transition hover:bg-mint-400/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-900"
                href={option.href}
              >
                {option.title}
              </a>
            </div>
          ))}
        </div>
      </header>
      <section className="rounded-3xl bg-white px-6 py-10 shadow-soft sm:px-10">
        <h2 className="text-2xl font-semibold text-teal-900">Hvordan logger jeg inn på Min Side?</h2>
        <p className="mt-4 text-sm text-text-900/80">
          Logg inn med BankID eller engangskode på SMS. Vi sender deg en sikker lenke på telefonen. Trenger du hjelp, kan du kontakte kundeservice direkte.
        </p>
        <Link
          href={routes.kundeservice as Route}
          className="mt-4 inline-flex text-sm font-semibold text-teal-900 hover:underline"
        >
          Vi kan hjelpe deg
        </Link>
      </section>
    </div>
  );
}
