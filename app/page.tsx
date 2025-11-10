import { motion } from "framer-motion";
import Link from "next/link";

import { CTAButtons } from "@/components/CTAButtons";
import { Hero } from "@/components/Hero";
import { routes } from "@/lib/routes";

const steps = [
  {
    title: "Velg strømavtale",
    description: "Finn Norgespris eller avtalen som passer deg best.",
  },
  {
    title: "Bestill",
    description: "Signér bestillingen digitalt på få minutter.",
  },
  {
    title: "Bekreft",
    description: "Vi ordner resten og bekrefter byttet i Min Side.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-20">
      <Hero
        title="Kom i gang med Norgespris"
        description="Med Norgespris får du samme lave pris som innkjøpsprisen til strømselskapene. Aktiver avtalen via Elhub og få alt samlet på én faktura."
        primaryCta={{ label: "Allerede kunde", href: routes.minSide }}
        secondaryCta={{ label: "Bli kunde", href: routes.stromBestill }}
      />

      <section className="overflow-hidden rounded-3xl bg-teal-900 px-6 py-12 text-white shadow-soft sm:px-10">
        <div className="grid gap-10 md:grid-cols-[2fr,1fr] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Aktiver Norgespris hos Elhub</h2>
            <p className="mt-4 text-base text-white/80">
              Har du allerede strøm fra Eiker Energi? Aktiver Norgespris i Elhub og få automatisk prisjustering hver time. Du beholder fordelene dine og mottar alt på én faktura.
            </p>
            <div className="mt-6">
              <CTAButtons
                primary={{ label: "Bestill Norgespris", href: routes.stromBestill }}
                secondary={{ label: "Les mer", href: routes.strom }}
              />
            </div>
          </div>
          <div className="rounded-3xl bg-white/10 p-6 text-sm text-white/80">
            <h3 className="text-lg font-semibold text-white">Hva trenger du?</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-mint-400" aria-hidden />
                Fødselsnummer eller organisasjonsnummer
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-mint-400" aria-hidden />
                Tilgang til BankID eller annen digital legitimasjon
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-mint-400" aria-hidden />
                2 minutter – resten ordner vi!
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-white px-6 py-16 shadow-soft sm:px-10">
        <div className="flex flex-col gap-6 text-center">
          <div className="mx-auto max-w-2xl text-pretty">
            <h2 className="text-3xl font-semibold text-teal-900">Enkelt å bytte til Eiker Energi</h2>
            <p className="mt-4 text-base text-text-900/80">
              Vi tar oss av hele prosessen. Velg avtalen som passer, bestill digitalt og bekreft – du er kunde hos oss på få minutter.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="rounded-2xl border border-teal-900/10 bg-sand-100 px-6 py-8 text-left shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mint-400 text-base font-semibold text-teal-900">
                  0{index + 1}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-teal-900">{step.title}</h3>
                <p className="mt-3 text-sm text-text-900/80">{step.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-4">
            <Link
              href={routes.stromBestill}
              className="inline-flex items-center justify-center rounded-full bg-mint-400 px-8 py-3 text-sm font-semibold text-text-900 shadow-soft transition hover:bg-mint-400/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-900"
            >
              Kom i gang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
