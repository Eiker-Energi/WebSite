import { Mail, Phone } from "lucide-react";

import { CTAButtons } from "@/components/CTAButtons";
import { routes } from "@/lib/routes";

const team = [
  "Arne Martin",
  "Anne-Line",
  "Tom Erik",
  "Julia",
];

export const metadata = {
  title: "Kundeservice",
  description: "Kontakt kundeservice hos Eiker Energi. Vi er tilgjengelige på telefon, e-post og Min Side.",
};

export default function KundeservicePage() {
  return (
    <div className="space-y-16">
      <header className="grid gap-10 rounded-3xl bg-white px-6 py-12 shadow-soft sm:px-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold text-teal-900">Kundeservice</h1>
          <p className="text-base text-text-900/80">
            Vi er her for å hjelpe deg på telefon, e-post og i Min Side. Ta kontakt i åpningstiden 09–15 eller send oss en melding når det passer deg.
          </p>
          <div className="space-y-4 rounded-2xl bg-sand-100 p-5">
            <div className="flex items-center gap-3 text-sm font-semibold text-teal-900">
              <Phone className="h-5 w-5" aria-hidden />
              <a href="tel:+4732251400">32 25 14 00</a>
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-teal-900">
              <Mail className="h-5 w-5" aria-hidden />
              <a href="mailto:kundeservice@eikerenergi.no">kundeservice@eikerenergi.no</a>
            </div>
            <p className="text-sm text-text-900/70">Åpent mandag–fredag 09–15</p>
          </div>
          <CTAButtons
            primary={{ label: "Logg inn Min Side", href: routes.minSide }}
            secondary={{ label: "Se hjelpesenter", href: routes.kundeservice }}
          />
        </div>
        <div className="space-y-6 rounded-3xl bg-teal-900 p-6 text-white shadow-soft">
          <h2 className="text-2xl font-semibold">Vi hjelper deg</h2>
          <p className="text-sm text-white/80">
            Teamet vårt kjenner lokalmiljøet og følger deg opp fra start til mål. Du får rask hjelp og personlig oppfølging.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {team.map((member) => (
              <div key={member} className="rounded-2xl bg-white/10 p-4 text-center text-sm font-semibold">
                {member}
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}
