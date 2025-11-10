import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTAButtons } from "@/components/CTAButtons";
import { routes } from "@/lib/routes";

export const metadata = {
  title: "Fiber",
  description: "Fibernett fra Eiker Energi – stabilt og raskt levert gjennom NextGenTel.",
};

export default function FiberPage() {
  return (
    <div className="space-y-12">
      <Breadcrumbs items={[{ label: "Hjem", href: routes.home }, { label: "Fiber" }]} />
      <header className="grid gap-10 rounded-3xl bg-white px-6 py-12 shadow-soft sm:px-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-900/70">Fiber</p>
          <h1 className="text-4xl font-semibold text-teal-900">
            Fibernett fra Eiker Energi – enkelt og effektivt
          </h1>
          <p className="text-base text-text-900/80">
            Med NextGenTel som partner leverer vi fiber i verdensklasse. Få høy fart, stabil linje og kundeservice som svarer når du trenger det.
          </p>
          <CTAButtons
            primary={{ label: "Bestill", href: routes.stromBestill }}
            secondary={{ label: "Se driftsmeldinger", href: routes.kundeservice }}
          />
        </div>
        <div className="space-y-6 rounded-3xl bg-sand-100 p-6 shadow-inner">
          <div className="rounded-2xl bg-gradient-to-br from-teal-900/20 via-mint-400/20 to-sand-100 p-10 text-center">
            <span className="text-lg font-semibold text-teal-900">Familien på nett</span>
            <p className="mt-4 text-sm text-text-900/70">
              Surf, strøm og spill uten forsinkelser. Fiber fra Eiker Energi holder hele familien online.
            </p>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-soft">
            <span className="text-sm font-semibold text-teal-900">Partner</span>
            <span className="text-base font-semibold text-text-900">NextGenTel</span>
          </div>
        </div>
      </header>
    </div>
  );
}
