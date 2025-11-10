import { CheckCircle } from "lucide-react";

import { CTAButtons } from "@/components/CTAButtons";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { routes } from "@/lib/routes";

const steps = [
  "Fyll inn adressen din og bekreft strømleverandør",
  "Signér avtalen digitalt med BankID",
  "Vi bekrefter byttet og sender deg én samlet faktura",
];

export const metadata = {
  title: "Bestill strømavtale",
  description: "Bestill Norgespris eller andre strømavtaler fra Eiker Energi på få minutter.",
};

export default function BestillStromPage() {
  return (
    <div className="space-y-12">
      <Breadcrumbs items={[{ label: "Hjem", href: routes.home }, { label: "Strøm", href: routes.strom }, { label: "Bestill" }]} />
      <header className="rounded-3xl bg-white px-6 py-12 shadow-soft sm:px-10">
        <h1 className="text-4xl font-semibold text-teal-900">Bestill strømavtale</h1>
        <p className="mt-4 max-w-2xl text-base text-text-900/80">
          Start bestillingen av Norgespris eller andre strømavtaler fra Eiker Energi. Det tar kun noen minutter å bli kunde – vi tar oss av oppsigelsen hos din gamle leverandør.
        </p>
        <div className="mt-8">
          <CTAButtons
            primary={{ label: "Kom i gang", href: "https://www.eikerenergi.no" }}
            secondary={{ label: "Har du spørsmål?", href: routes.kundeservice }}
          />
        </div>
      </header>
      <section className="grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <article key={step} className="rounded-3xl bg-white p-6 shadow-soft">
            <CheckCircle className="h-8 w-8 text-mint-400" aria-hidden />
            <p className="mt-4 text-sm text-text-900/80">{step}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
