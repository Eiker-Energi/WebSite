import { Check, Zap } from "lucide-react";
import Link from "next/link";

import { CTAButtons } from "@/components/CTAButtons";
import { routes } from "@/lib/routes";

const offers = [
  {
    name: "Eiker Energi Spot",
    price: "5,49 øre/kWh",
    fee: "+ 39 kr/mnd",
    highlights: [
      "Spotpris time for time",
      "Tilgang til Min Side og app",
      "Ingen forskuddsbetaling",
      "Ingen bindingstid",
    ],
  },
  {
    name: "Støtt ditt idrettslag",
    price: "5,49 øre/kWh",
    fee: "+ 39 kr/mnd",
    highlights: [
      "Gi støtte til lokalt lag",
      "Spotpris med timesoppløsning",
      "Egen oversikt i appen",
      "Ingen forskuddsbetaling",
    ],
  },
];

const benefits = [
  "Fast kontaktperson i kundeservice",
  "Varsling om timespris rett i appen",
  "Alt samlet på én faktura",
  "Mulighet for ladeboks og solceller",
];

export const metadata = {
  title: "Strøm",
  description: "Finn din strømavtale hos Eiker Energi. Norgespris og lokale fordeler for privat og bedrift.",
};

export default function StromPage() {
  return (
    <div className="space-y-16">
      <header className="rounded-3xl bg-white px-6 py-12 shadow-soft sm:px-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-900/70">Strømavtaler</p>
            <h1 className="mt-3 text-4xl font-semibold text-teal-900">Strømavtaler</h1>
            <p className="mt-3 max-w-xl text-base text-text-900/80">
              Velg mellom fleksible avtaler for privat og bedrift. Med Norgespris får du alltid markedspris og full kontroll.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-full bg-sand-100 p-2">
            <button className="rounded-full bg-teal-900 px-5 py-2 text-sm font-semibold text-white shadow-soft">
              Privat
            </button>
            <button className="rounded-full px-5 py-2 text-sm font-semibold text-teal-900 transition hover:bg-white">
              Bedrift
            </button>
          </div>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {offers.map((offer) => (
          <article key={offer.name} className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-teal-900">{offer.name}</h2>
                <div className="mt-2 flex items-baseline gap-3 text-teal-900">
                  <span className="text-3xl font-semibold">{offer.price}</span>
                  <span className="text-sm font-semibold text-text-900/70">{offer.fee}</span>
                </div>
              </div>
              <Zap className="h-10 w-10 text-mint-400" aria-hidden />
            </div>
            <ul className="mt-6 space-y-3 text-sm text-text-900/80">
              {offer.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-mint-400" aria-hidden />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-1 items-end">
              <Link
                href={routes.stromBestill}
                className="rounded-full bg-mint-400 px-6 py-2 text-sm font-semibold text-text-900 shadow-soft transition hover:bg-mint-400/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-900"
              >
                Les mer
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-3xl bg-[#F6D86B] px-6 py-12 shadow-soft sm:px-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr,0.8fr] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-teal-900">En strøm av fordeler</h2>
            <p className="mt-4 text-base text-text-900/80">
              Eiker Energi gir deg mer enn bare strøm. Vi sørger for at du får full oversikt, forutsigbar faktura og tjenester som passer boligen din.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-text-900/80">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-teal-900" aria-hidden />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <CTAButtons
                primary={{ label: "Bli kunde", href: routes.stromBestill }}
                secondary={{ label: "Se prisliste", href: routes.strom }}
              />
            </div>
          </div>
          <div className="rounded-3xl border border-teal-900/10 bg-white/60 p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-teal-900">Se prisliste og historiske strømpriser</h3>
            <p className="mt-3 text-sm text-text-900/70">
              Få full oversikt over tidligere priser og dagens timespris. Vi oppdaterer prisene hver dag slik at du kan planlegge forbruket ditt.
            </p>
            <Link
              href="https://www.hvakosterstrommen.no"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-900 hover:underline"
            >
              Se prisliste og historiske strømpriser
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
